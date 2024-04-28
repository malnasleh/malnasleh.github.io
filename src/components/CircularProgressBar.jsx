import React, { useState } from 'react'

const CircularProgressBar = ({ currentSkill }) => {
    return (
        <div>
            <p className='text-center text-5xl text-sky-600'>{currentSkill.title}</p>
            <div className="flex items-center justify-center">
                <svg className="transform -rotate-90 w-72 h-72">
                    <circle cx="145" cy="145" r="120" stroke="currentColor" strokeWidth="30" fill="transparent" className="text-gray-700" />
                    <circle
                        cx="145"
                        cy="145"
                        r="120"
                        stroke="currentColor"
                        strokeWidth="30"
                        fill="transparent"
                        strokeDasharray={(2 * Math.PI * 120).toFixed(2)}
                        strokeDashoffset={(2 * Math.PI * 120 * (1 - currentSkill.percent / 100)).toFixed(2)}
                        className="text-sky-600"
                    />
                </svg>
                <span className="absolute text-5xl text-sky-600">{`${currentSkill.percent}%`}</span>
            </div>
        </div>
    )
}

export default CircularProgressBar
