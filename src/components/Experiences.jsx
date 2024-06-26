import React, { useEffect, useState } from 'react'
import firebase from '../../firebaseConfig';
import WorkExperienceCard from './WorkExperienceCard';

const Experience = () => {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExperiences = async () => {
      console.log("EEEEEEEWEEEEEEEEEEE")
      try {
        // Use Firebase SDK to fetch data from Realtime Database
        const snapshot = await firebase.database().ref(`experiences/`).once('value');

        // Check if data exists
        if (snapshot.exists()) {
          // Convert snapshot value to JSON
          const data = snapshot.val();
          setExperiences(data);
        } else {
          // Handle case where data does not exist
          console.error(`No experiences were found`);
        }
      } catch (error) {
        console.error('Error fetching experience data:', error);
        throw error; // Propagate error to the caller
      } finally {
        setLoading(false);

      }
    }
    fetchExperiences();
  }, []);

  return (
    <>
      <h2 className='text-center text-3xl font-bold text-sky-500 pt-6'>Work Experience</h2>
      <div className="grid grid-cols-2 gap-4 px-6 pb-6 pt-2">
        {experiences.map((experience, index) => (
          <WorkExperienceCard
            key={index}
            experience={experience}
          />
        ))}
      </div>
    </>
  );
}

export default Experience