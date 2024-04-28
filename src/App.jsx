import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import React from 'react'
import HomePage from './pages/HomePage';
import MainLayout from './Layouts/MainLayout';
import NotFoundPage from './pages/NotFoundPage';
import ProjectPage, { projectLoader } from './pages/ProjectPage';
import SkillsPage from './pages/SkillsPage';
import ProjectsPage from './pages/ProjectsPage';



const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/projects' element={<ProjectsPage />} />
        <Route path='/skills' element={<SkillsPage />} />
        <Route path='/projects/:id' element={<ProjectPage/>} loader={projectLoader} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    )
  );

  return (
    <RouterProvider router={router} />
  )
}

export default App