import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaJava, FaPython, FaReact } from 'react-icons/fa'
import { DiDjango, DiHaskell } from 'react-icons/di'
import { SiGodotengine, SiSqlite } from 'react-icons/si'

const ProjectListing = ({ project }) => {
    const [showFullDescription, setShowFullDescription] = useState(false);

    let description = project.description;

    if (!showFullDescription) {
        description = description.substring(0, 90) + '...';
    }

    const skillIconMap = {
        react: FaReact,
        java: FaJava,
        python: FaPython,
        django: DiDjango,
        sqlite: SiSqlite
    };

    const renderSkillIcons = (projectSkills) => {
        return projectSkills.map((skill, index) => {
            console.log(skill);
            const IconComponent = skillIconMap[skill.toLowerCase()];
            if (!IconComponent) return null; // If no icon found for the skill
            return <IconComponent key={index} title={skill} className="inline-block mb-1 text-sky-950 w-8 h-8 mr-2" />;
        });
    };

    return (
        <div className="bg-warmBeige rounded-xl shadow-md relative ">
            <div className="p-4">
                <div className="mb-6">
                    <h3 className="text-xl text-sky-700 font-bold">{project.title}</h3>
                </div>

                <div className="text-sky-950">
                    {description}
                </div>

                <button onClick={() => setShowFullDescription((prevState) => prevState = !prevState)} className=" text-sky-700 hover:text-sky-500 mb-5 ">
                    {showFullDescription ? 'Less' : 'More'}
                </button>

                <div>
                    {renderSkillIcons(project.skills)}
                </div>

                <div className="border border-sky-500 mb-5"></div>

                <div className="flex flex-col lg:flex-row justify-center mb-4">
                    <Link
                        to={`/projects/${project.id}`}
                        className="h-[36px] bg-tyrianPurple hover:bg-lightTyrianPurple hover:shadow-md hover:shadow-tyrianPurple  text-white px-4 py-2 rounded-lg text-center text-sm">
                        Read More
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ProjectListing