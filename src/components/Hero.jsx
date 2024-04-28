import React from 'react'

const Hero = ({title = 'Welcome,', subtitle = 'A backend focused full stack developer, with a passion for creating software solutions to real world problems.'}) => {
    return (
        <section className="bg-orange-100 pt-20 pb-4 ">
            <div
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 "
            >
                <div className="text-left">
                    <h1
                        className="text-4xl font-extrabold text-sky-500 sm:text-5xl md:text-6xl"
                    >
                        {title}
                    </h1>
                    <h1
                        className="text-4xl font-extrabold text-sky-700 sm:text-5xl md:text-6xl"
                    >
                        I'm Mahmood Alnasleh,
                    </h1>
                    <p className="my-4 text-xl w-2/3 text-pretty text-sky-950">
                        {subtitle}
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Hero