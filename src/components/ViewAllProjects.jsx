import React from 'react'
import {Link} from 'react-router-dom'

const ViewAllProjects = () => {
  return (
    <section className="m-auto max-w-lg my-10 px-6">
        <Link
          to="/projects"
          className="block bg-sky-900 text-white text-center py-4 px-6 rounded-xl hover:bg-sky-600 hover:shadow-md hover:shadow-sky-900"
        >View All Projects</Link
        >
      </section>
  )
}

export default ViewAllProjects