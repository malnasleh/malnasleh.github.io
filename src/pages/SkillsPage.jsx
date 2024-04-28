import React, { useState } from 'react'
import CircularProgressBar from '../components/CircularProgressBar';
const SkillsPage = () => {
    const skillsData = [
        { title: 'Skill 1', percent: 20 },
        { title: 'Skill 2', percent: 40 },
        { title: 'Skill 3', percent: 60 },
        { title: 'Skill 4', percent: 80 },
        { title: 'Skill 5', percent: 100 },
        { title: 'Skill 1', percent: 20 },
        { title: 'Skill 2', percent: 40 },
        { title: 'Skill 3', percent: 60 },
        { title: 'Skill 4', percent: 80 },
        { title: 'Skill 5', percent: 100 },
        { title: 'Skill 1', percent: 20 },
        { title: 'Skill 2', percent: 40 },
        { title: 'Skill 3', percent: 60 },
        { title: 'Skill 4', percent: 80 },
        { title: 'Skill 5', percent: 100 },
    ];

    const [currentSkill, setCurrentSkill] = useState(skillsData[0]);

    return (
        <div className='bg-orange-100 h-screen grid place-content-center pt-16 '>
            <h1 className='text-sky-900 pl-4 text-xl'>Please Select a Skill To View My Proficiency</h1>
            <main className=" px-4 w-screen text-sky-700 bg-orange-100">
                <section className="flex items-center p-6 space-y-6 bg-warmBeige rounded-xl shadow-md md:grid md:grid-cols-2 md:gap-4 sm:space-y-0 border-2 border-sky-600">
                    <div className="grid grid-cols-2 gap-6">
                        {skillsData.map((skill, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSkill(skill)}
                                className={` text-white hover:bg-sky-600 hover:text-white rounded-md p-1 ${currentSkill.title === skill.title ? 'font-bold bg-sky-600' : 'bg-sky-900'}`}
                            >
                                {skill.title}
                            </button>
                        ))}
                    </div>
                    <CircularProgressBar currentSkill={currentSkill}/>

                </section>
            </main>
        </div>
    );
}


export default SkillsPage;

