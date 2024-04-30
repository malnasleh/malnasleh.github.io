import React from 'react'
import logo from '../assets/Images/logo.png'
import { NavLink, useLocation } from 'react-router-dom'

const Navbar = () => {
    const linkClass = ({ isActive }) => isActive ? 'bg-sky-900 text-white hover:bg-sky-600 hover:text-white rounded-md px-3 py-2' : 'text-sky-900 hover:bg-sky-600 hover:text-white rounded-md px-3 py-2'

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
                                className="h-10 w-auto"
                                src={logo}
                                alt="React Jobs"
                            />
                        </NavLink>
                        <div>
                            <div className="flex space-x-2">
                                <NavLink
                                    to="/"
                                    className={(location.pathname === "/" && location.hash === "") ? 'bg-sky-900 text-white hover:bg-sky-600 hover:text-white rounded-md px-3 py-2' : 'text-sky-900 hover:bg-sky-600 hover:text-white rounded-md px-3 py-2'}
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
                                    className={(location.pathname === "/" && location.hash === "#contact-card") ? 'bg-sky-900 text-white hover:bg-sky-600 hover:text-white rounded-md px-3 py-2' : 'text-sky-900 hover:bg-sky-600 hover:text-white rounded-md px-3 py-2'}
                                >
                                    Contact
                                </NavLink >
                                <a href='/Resume.pdf'
                                    target="_blank"
                                    className='text-sky-900 hover:bg-sky-600 hover:text-white rounded-md px-3 py-2'>
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