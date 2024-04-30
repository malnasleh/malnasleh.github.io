import React, { useState } from 'react'

const CircularProgressBar = ({ currentSkill }) => {

    const getProficiencyFromPercent = ((percent) => {
        if (percent < 50) {
            return "Beginner"
        } else if (percent < 70) {
            return "Intermediate"
        } else if (percent < 90) {
            return "Proficient"
        } else {
            return "Advanced"
        }
    })

    return (
        <div className="flex flex-col items-center justify-center h-full">
            <p className='text-xl md:text-4xl text-center text-sky-600'>{currentSkill.title === 'C Sharp' ? 'C#' : currentSkill.title}</p>
            <div className="flex items-center justify-center w-full h-1/2">
                <svg className="transform -rotate-90 w-3/4 md:w-72 h-3/4 md:h-72">
                    <circle cx="50%" cy="50%" r="30%" stroke="currentColor" strokeWidth="5%" fill="transparent" className="text-gray-700" />
                    <circle
                        cx="50%"
                        cy="50%"
                        r="30%"
                        stroke="currentColor"
                        strokeWidth="5%"
                        fill="transparent"
                        strokeDasharray="188.49556%"
                        strokeDashoffset={(188.49556 - 188.49556 * (currentSkill.percent / 100)).toFixed(2) + "%"}
                        className="text-sky-600"
                    />
                </svg>
                <p className="absolute text-xl md:text-4xl text-sky-600">{`${currentSkill.percent}%`}</p>
            </div>
            <p className="text-xl md:text-4xl text-center text-sky-600">{getProficiencyFromPercent(currentSkill.percent)}</p>
        </div>



    )
}

export default CircularProgressBar
