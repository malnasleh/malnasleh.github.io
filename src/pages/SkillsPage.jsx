import React, { useState } from 'react'
import CircularProgressBar from '../components/CircularProgressBar';
import { useEffect } from 'react';
import firebase from '../../firebaseConfig';


const SkillsPage = () => {
    const [skills, setSkills] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [currentSkill, setCurrentSkill] = useState(null);


    useEffect(() => {
        const fetchSkills = async () => {
            try {
                const snapshot = await firebase.database().ref(`skills/`).once(`value`);
                if (snapshot.exists()) {
                    setSkills(snapshot.val());
                }
                else {
                    console.error("No skills were found")
                }
            } catch {
                console.error('Error fetching skills data:', error);
                throw error;
            } finally {
                setIsLoading(false)
            }
        }
        fetchSkills();
    }, [])

    useEffect(() => {
        console.log(skills)
        if (skills.length > 0) {
            setCurrentSkill(skills[0]);
        }
    }, [skills]);


    return (
        <div className='bg-orange-100 h-screen grid place-content-center pt-16 '>
            <h1 className='text-sky-900 pl-4 text-xl'>Please Select a Skill To View My Proficiency</h1>
            <main className=" px-4 w-screen text-sky-700 bg-orange-100">
                {currentSkill != null && <section className="flex items-center p-6 space-y-6 bg-warmBeige rounded-xl shadow-md md:grid md:grid-cols-2 md:gap-4 sm:space-y-0 border-2 border-sky-600">
                    <div className="grid grid-cols-2 gap-6">
                        {skills.map((skill, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSkill(skill)}
                                className={` text-white hover:bg-sky-600 hover:text-white rounded-md p-1 ${currentSkill.title === skill.title ? 'font-bold bg-sky-600' : 'bg-sky-900'}`}>
                                {skill.title === 'C Sharp' ? 'C#' : skill.title}
                            </button>
                        ))}
                    </div>
                    <CircularProgressBar currentSkill={currentSkill} />
                </section>}
            </main>
        </div>
    );
}


export default SkillsPage;

