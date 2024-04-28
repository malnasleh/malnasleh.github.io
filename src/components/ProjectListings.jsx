import React from 'react'
import { useEffect, useState } from 'react';
import ProjectListing from './ProjectListing';
import Spinner from './Spinner';
import ViewAllProjects from './ViewAllProjects';

const ProjectListings = ({ isHome = false }) => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            const apiURL = isHome ? '/api/projects?_limit=3' : '/api/projects'
            try {
                const res = await fetch(apiURL);
                const data = await res.json();
                setProjects(data);
            } catch (error) {
                console.log('Error fetching project data', error);
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
                <h2 className="text-3xl font-bold text-sky-500 mb-6 text-center">
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