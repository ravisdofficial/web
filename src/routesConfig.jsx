import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import FarmlandPage from './pages/FarmlandPage'
import VillaContent from './pages/VillaContent'
import ProjectDetails from './pages/ProjectDetails'
import RevenueDetail from './pages/RevenueDetail'

 const routes = [
  { path: '/', element: <Home />, meta : {title: 'Home'} },
  { path: '/about', element: <About />,meta :{ title: 'About Us'} },
  { path: '/villa', element: <VillaContent />, meta: { title: 'Villa' } },
  { path: '/farmland', element: <FarmlandPage />, meta: { title: 'Farmland' } },
  { path: '/project', element: <ProjectDetails />, meta: { title: 'Project Details' } },
  { path: '/revenue', element: <RevenueDetail />, meta: { title: 'Revenue Details' } },
  { path: '/contact', element: <Contact />, meta : {title: 'Contact'} },
    ]

export default routes;