import React from 'react'
import logo from '../assets/Images/logo.png'
import { NavLink, useLocation } from 'react-router-dom'

const Navbar = () => {
    const linkClass = ({ isActive }) => isActive ? ' bg-tyrianPurple hover:shadow-md hover:shadow-tyrianPurple hover:bg-lightTyrianPurple  text-white rounded-md px-3 py-2' : 'text-tyrianPurple hover:bg-lightTyrianPurple hover:text-white hover:shadow-md hover:shadow-tyrianPurple rounded-md px-3 py-2'

    const location = useLocation();

    return (
        <nav className="bg-warmBeige fixed w-full z-50 border-b border-sky-900 overflow-x-auto">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div
                        className="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
                    >
                        <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
                            <img
                                className="ml-3 md:ml-0 h-10 w-auto"
                                src={logo}
                                alt="React Jobs"
                            />
                        </NavLink>
                        <div>
                            <div className="flex space-x-2">
                                <NavLink
                                    to="/"
                                    className={(location.pathname === "/" && location.hash === "") ? ' bg-tyrianPurple hover:shadow-md hover:shadow-tyrianPurple hover:bg-lightTyrianPurple  text-white rounded-md px-3 py-2' : 'text-tyrianPurple hover:bg-lightTyrianPurple hover:text-white hover:shadow-md hover:shadow-tyrianPurple rounded-md px-3 py-2'}
                                >
                                    Home
                                </NavLink>
                                <NavLink
                                    to="/projects"
                                    className={linkClass}
                                >Projects</NavLink>
                                <NavLink
                                    to="/skills"
                                    className={linkClass}
                                >Skills</NavLink >
                                <NavLink
                                    to='/#contact-card'
                                    className={(location.pathname === "/" && location.hash === "#contact-card") ? ' bg-tyrianPurple hover:shadow-md hover:shadow-tyrianPurple hover:bg-lightTyrianPurple  text-white rounded-md px-3 py-2' : 'text-tyrianPurple hover:bg-lightTyrianPurple hover:text-white hover:shadow-md hover:shadow-tyrianPurple rounded-md px-3 py-2'}
                                >
                                    Contact
                                </NavLink >
                                <a href='/Resume.pdf'
                                    target="_blank"
                                    className='text-tyrianPurple hover:bg-lightTyrianPurple hover:text-white hover:shadow-md hover:shadow-tyrianPurple rounded-md px-3 py-2'>
                                    Resume
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar