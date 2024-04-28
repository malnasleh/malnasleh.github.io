import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import React from 'react'
import HomePage from './pages/HomePage';
import MainLayout from './Layouts/MainLayout';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';
import JobPage, { jobLoader } from './pages/ProjectPage';
import EditJobPage from './pages/EditJobPage';
import SkillsPage from './pages/SkillsPage';



const App = () => {

  const addJob = async (newJob) => {
    const res = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newJob),
    })
    return;
  }

  const deleteJob = async (id) => {
    const res = await fetch(`/api/jobs/${id}`, {
      method: 'DELETE',
    });
    return;
  }

  const updateJob = async (job) => {
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(job),
    });
  }

  const scrollToContact = (() => {
    const specificComponent = document.getElementById('contact-card');
    if (specificComponent) {
      specificComponent.scrollIntoView({ behavior: 'smooth' });
    }
  })

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} onEnter={() => console.log("Entered")} />
        <Route path='/projects' element={<JobsPage />} />
        <Route path='/skills' element={<SkillsPage />} />
        <Route path='/projects/:id' element={<JobPage deleteJob={deleteJob} />} loader={jobLoader} />
        <Route path='/edit-job/:id' element={<EditJobPage updateJobSubmit={updateJob} />} loader={jobLoader} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    )
  );

  return (
    <RouterProvider router={router} />
  )
}

export default App