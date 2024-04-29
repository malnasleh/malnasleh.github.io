import React from 'react'
import { useEffect, useState } from 'react';
import ProjectListing from './ProjectListing';
import Spinner from './Spinner';
import ViewAllProjects from './ViewAllProjects';
import firebase from '../../firebaseConfig';


const ProjectListings = ({ isHome = false }) => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                // Use Firebase SDK to fetch data from Realtime Database
                const snapshot = await firebase.database().ref(`projects/`).once('value');

                // Check if data exists
                if (snapshot.exists()) {
                    // Convert snapshot value to JSON
                    const data = isHome ? snapshot.val().slice(0,3) : snapshot.val();
                    console.log(data);
                    setProjects(data);
                } else {
                    // Handle case where data does not exist
                    console.error(`No projects were found`);
                }
            } catch (error) {
                console.error('Error fetching project data:', error);
                throw error; // Propagate error to the caller
            } finally {
                setLoading(false);
            }
        }
        fetchProjects();
    }, []);

    const sectionClass = isHome ? "bg-orange-100 px-4 " : "bg-orange-100 px-4 pb-10"
    return (
        <section className={sectionClass}>
            <div className="container-xl lg:container m-auto">
                <h2 className="text-3xl font-bold text-sky-500 mb-4 text-center">
                    {isHome ? 'Recent Projects' : 'Browse Projects'}
                </h2>

                {loading ? <Spinner loading={loading} /> : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {projects.map((project) => (
                            <ProjectListing key={project.id} project={project} />
                        ))}
                    </div>)}
            </div>

            {isHome && <ViewAllProjects />}
        </section>
    )
}

export default ProjectListings