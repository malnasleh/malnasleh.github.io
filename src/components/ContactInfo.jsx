import React from 'react'
import Card from './Card'
import { FaEnvelope, FaLinkedin } from 'react-icons/fa'

const ContactInfo = () => {
    const obfuscateEmail = (email) => {
        return email.split('').map(char => `&#${char.charCodeAt(0)};`).join('');
    };

    return (
        <div className='bg-orange-100 p-4 w-auto' id='contact-card'>
            <Card bg='bg-warmBeige inline-block'>
                <h2 className="text-2xl text-sky-700 font-bold">Contact Info</h2>
                <p className="mt-2 text-sky-900 mb-4">
                    I can be reached through email or LinkedIn at the following links
                </p>
                <a href='ma&#105;lt&#111;&#58;m%6&#49;l&#110;&#97;s&#37;&#54;Ce%&#54;8%38&#64;gmail&#46;co&#109;' className='text-sky-700'>
                    <FaEnvelope className='inline-block text-4xl text-sky-700 hover:text-sky-500' />
                </a>
                <a href='https://www.linkedin.com/in/mahmood-alnasleh-4485b5159/' className='text-sky-700'>
                    <FaLinkedin className='text-4xl inline-block ml-2 hover:text-sky-500' />
                </a>
            </Card>
        </div>
    )
}

export default ContactInfo