import React from 'react'
import { useLoaderData, Link, } from 'react-router-dom';
import { FaArrowLeft, FaGithub } from 'react-icons/fa';
import firebase from '../../firebaseConfig';
import ImageGallery from '../components/ImageGallery';

const ProjectPage = () => {
    const project = useLoaderData();
    const features = Object.entries(project.features);

    return (
        <div className="bg-orange-100 pt-16 h-screen">
            <section >
                <div className="container m-auto py-6 px-6">
                    <Link
                        to="/projects"
                        className="text-sky-900 hover:text-sky-600 flex items-center">
                        <FaArrowLeft className='mr-2' /> Back to All Projects
                    </Link>
                </div>
            </section>

            <section>
                <div className="bg-orange-100 container m-auto pb-4 px-6">
                    <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
                        <main>
                            <div
                                className="bg-warmBeige p-6 rounded-lg shadow-md text-center md:text-left border border-sky-700"
                            >
                                <div className="text-gray-500 mb-4">{project.type}</div>
                                <h1 className="text-3xl text-sky-700 font-bold mb-4">
                                    {project.title}
                                </h1>
                                <h3 className="text-sky-700 text-xl font-bold ">
                                    Project Description
                                </h3>

                                <p className="mb-4 text-sky-950">
                                    {project.description}
                                </p>

                                <h3 className="text-sky-700 text-xl font-bold">Features</h3>
                                <ul className='divide-y divide-sky-600'>
                                    {features.map((feature) => {
                                        return (
                                            < li key={feature[0]} className='py-2 text-sky-900' >
                                                <span className='text-sky-700 font-bold'>
                                                    {feature[0]}:
                                                </span>
                                                <span className='ml-2 text-sky-950'>
                                                    {feature[1]}
                                                </span>
                                            </li>)
                                    })}
                                </ul>
                            </div>
                        </main>

                        <aside>
                            <div className="bg-warmBeige rounded-lg shadow-md border border-sky-700">
                                <h3 className="text-xl font-bold my-2 pl-2 text-sky-700">Technology Showcase</h3>
                                <ul className="grid grid-cols-2 pl-6 pb-2">
                                    {project.skills.map((skill, index) => {
                                        return (
                                            <li key={index} className='list-disc text-sky-900'><span className='text-sky-500'>{skill}</span></li>
                                        );
                                    })}
                                </ul>
                            </div>
                            <a
                                target='_blank'
                                href={project.codeLink}
                                className="block mt-4 bg-sky-900 text-white text-center py-4 rounded-xl hover:bg-sky-600 hover:shadow-md hover:shadow-sky-900"
                            ><FaGithub className='inline-block mr-3 mb-1 text-xl ' />Go To Project Github</a>
                            <ImageGallery images={Object.values(project.images)}></ImageGallery>
                        </aside>
                    </div>
                </div >
            </section >
        </div >

    )
}

const projectLoader = async ({ params }) => {
    try {
        // Use Firebase SDK to fetch data from Realtime Database
        const snapshot = await firebase.database().ref(`projects/${params.id}`).once('value');

        // Check if data exists
        if (snapshot.exists()) {
            // Convert snapshot value to JSON
            const data = snapshot.val();
            console.log(data);
            return data;
        } else {
            // Handle case where data does not exist
            console.error(`Project with ID ${params.id} not found`);
            return null; // Or throw an error
        }
    } catch (error) {
        console.error('Error fetching project data:', error);
        throw error; // Propagate error to the caller
    }
}

export { ProjectPage as default, projectLoader };