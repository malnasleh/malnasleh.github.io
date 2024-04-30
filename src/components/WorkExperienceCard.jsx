import React from 'react';
import ReactCardFlip from 'react-card-flip';
import { FaMapMarker } from 'react-icons/fa';

const WorkExperienceCard = ({ experience }) => {
    const descriptions = Object.values(experience.descriptions);
    const [isFlipped, setIsFlipped] = React.useState(false);

    const handleClick = (e) => {
        setIsFlipped(!isFlipped);
        setTimeout(() => {
            // Scroll to the clicked card
            window.scrollTo({
                top: 750,
                behavior: 'smooth'
            });
        }, 100);
    };

    return (
        <ReactCardFlip className="slow-flip" isFlipped={isFlipped} flipDirection="horizontal">
            <div className="card-front border border-sky-700 transition duration-300 ease-in-out bg-warmBeige rounded-xl shadow-md p-4 hover:shadow-xl hover:shadow-sky-900 cursor-pointer" onClick={handleClick}>
                <h2 className="font-bold text-sky-700 text-xl mb-2">{experience.title}</h2>
                <p className="text-sky-900 mb-1">{experience.companyName}</p>
                <div className="text-orange-700 mb-3">
                    <FaMapMarker className='inline text-lg mb-1 mr-1' />
                    {experience.location}
                </div>
                <p className="text-sm text-gray-500 mb-2">{experience.startDate} - {experience.endDate}</p>
            </div>
            <div className={`card-back border border-sky-700 transition duration-300 ease-in-out bg-warmBeige rounded-xl shadow-md p-4 hover:shadow-xl hover:shadow-sky-900 cursor-pointer ${isFlipped ? 'visible' : 'hidden'}`} onClick={handleClick}>
                <h3 className='font-bold text-sky-900 text-xl'>Responsibilities</h3>
                <ul className='divide-y divide-sky-600 mt-4'>
                    {descriptions.map((item, index) => (
                        <li key={index} className='py-2 text-sky-900'>{item}</li>
                    ))}
                </ul>
            </div>
        </ReactCardFlip>
    );
};

export default WorkExperienceCard;