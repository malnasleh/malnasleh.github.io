import React from 'react'
import { useState } from 'react'
import { FaMapMarker } from 'react-icons/fa'
import {Link} from 'react-router-dom'

const ProjectListing = ({ project }) => {
    const [showFullDescription, setShowFullDescription] = useState(false);

    let description = project.description;

    if (!showFullDescription) {
        description = description.substring(0, 90) + '...';
    }

    return (
        <div className="bg-warmBeige rounded-xl shadow-md relative">
            <div className="p-4">
                <div className="mb-6">
                    <h3 className="text-xl text-sky-700 font-bold">{project.title}</h3>
                </div>

                <div className="mb-5 text-sky-950">
                    {description}
                </div>

                <button onClick={() => setShowFullDescription((prevState) => prevState = !prevState)} className="text-sky-500 mb-5 hover:text-indigo-600">
                    {showFullDescription ? 'Less' : 'More'}
                </button>

                <h3 className="text-sky-500 mb-2">{project.salary} / Year</h3>

                <div className="border border-sky-500 mb-5"></div>

                <div className="flex flex-col lg:flex-row justify-between mb-4">
                    <div className="text-orange-700 mb-3">
                        <FaMapMarker className='inline text-lg mb-1 mr-1'/>
                        {project.location}
                    </div>
                    <Link
                        to={`/projects/${project.id}`}
                        className="h-[36px] bg-sky-900 hover:bg-sky-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                    >
                        Read More
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ProjectListing