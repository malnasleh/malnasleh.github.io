import React from 'react';
import ReactCardFlip from 'react-card-flip';

const WorkExperienceCard = ({ title, company, location, descriptions }) => {
    const [isFlipped, setIsFlipped] = React.useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };

    return (
            <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                <div className="card-front transition duration-300 ease-in-out bg-warmBeige rounded-xl shadow-md p-4 hover:shadow-xl hover:shadow-sky-900" onClick={handleClick}>
                    <h2>{title}</h2>
                    <p>{company}</p>
                    <p>{location}</p>
                    <p>Click to flip</p>
                </div>
                <div className="card-back transition duration-300 ease-in-out bg-warmBeige rounded-xl shadow-md p-4 hover:shadow-xl hover:shadow-sky-900 " onClick={handleClick}>
                    <h3>Description</h3>
                    <ul>
                        {descriptions.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                    <p>Click to flip back</p>
                </div>
            </ReactCardFlip>
    );
};

export default WorkExperienceCard;