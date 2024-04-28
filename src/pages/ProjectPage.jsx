import React from 'react'
import { useLoaderData, Link, } from 'react-router-dom';
import { FaArrowLeft, FaMapMarker } from 'react-icons/fa';
import firebase from '../../firebaseConfig';

const ProjectPage = () => {
    //Loading job using useEffect instead of react-router-dom loader
    // const [job, setJob] = useState(null);
    // const [loading, setLoading] = useState(true);
    // useEffect(() => {
    //     const fetchJob = async () => {
    //         try {
    //             const res = await fetch(`/api/jobs/${id}`);
    //             const data = await res.json();
    //             setJob(data);
    //         } catch (error) {
    //             console.log('Error fetching job data', error);
    //         } finally {
    //             setLoading(false);
    //         }
    //     }
    //     fetchJob();
    // }, [])

    const job = useLoaderData();

    return (
        <>
            <section className='pt-16'>
                <div className="container m-auto py-6 px-6">
                    <Link
                        to="/jobs"
                        className="text-sky-900 hover:text-sky-600 flex items-center"
                    >
                        <FaArrowLeft className='mr-2' /> Back to All Project
                    </Link>
                </div>
            </section>

            <section className="bg-orange-100">
                <div className="container m-auto pb-4 px-6">
                    <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
                        <main>
                            <div
                                className="bg-white p-6 rounded-lg shadow-md text-center md:text-left"
                            >
                                <div className="text-gray-500 mb-4">{job.type}</div>
                                <h1 className="text-3xl font-bold mb-4">
                                    {job.title}
                                </h1>
                                <div
                                    className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start"
                                >
                                    <FaMapMarker className='text-orange-700 mr-1' />
                                    <p className="text-orange-700">{job.location}</p>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                                <h3 className="text-indigo-800 text-lg font-bold mb-6">
                                    Job Description
                                </h3>

                                <p className="mb-4">
                                    {job.description}
                                </p>

                                <h3 className="text-indigo-800 text-lg font-bold mb-2">Salary</h3>

                                <p className="mb-4">{job.salary} / Year</p>
                            </div>
                        </main>

                        <aside>
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-bold mb-6">Company Info</h3>

                                <h2 className="text-2xl">{job.company.name}</h2>

                                <p className="my-2">
                                    {job.company.description}
                                </p>

                                <hr className="my-4" />

                                <h3 className="text-xl">Contact Email:</h3>

                                <p className="my-2 bg-indigo-100 p-2 font-bold">
                                    {job.company.contactEmail}
                                </p>

                                <h3 className="text-xl">Contact Phone:</h3>

                                <p className="my-2 bg-indigo-100 p-2 font-bold">{job.company.contactPhone}</p>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

        </>

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