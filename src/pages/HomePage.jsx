import React from 'react'
import Hero from '../components/Hero'
import ProjectListings from '../components/ProjectListings'
import ContactInfo from '../components/ContactInfo'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Experience from '../components/Experiences'


const HomePage = () => {
    const location = useLocation();

    useEffect(() => {
        const { hash } = location;
        if (hash) {
            const element = document.querySelector(hash);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        } else {
            window.scrollTo({ top: 0, behavior: 'auto' });
        }
    }, [location]);

    return (
        <>
            <Hero />
            <ProjectListings isHome={true} />
            <Experience />
            <ContactInfo />
        </>
    )
}

export default HomePage