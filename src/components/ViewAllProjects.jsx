import React from 'react'
import {Link} from 'react-router-dom'

const ViewAllProjects = () => {
  return (
    <section className="m-auto max-w-lg my-10 px-6">
        <Link
          to="/projects"
          className="block bg-tyrianPurple text-white text-center py-4 px-6 rounded-xl hover:bg-lightTyrianPurple hover:shadow-md hover:shadow-tyrianPurple"
        >View All Projects</Link
        >
      </section>
  )
}

export default ViewAllProjects