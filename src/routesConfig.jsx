import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

 const routes = [
  { path: '/', element: <Home />, meta : {title: 'Home'} },
  { path: '/about', element: <About />,meta :{ title: 'About Us'} },
  { path: '/contact', element: <Contact />, meta : {title: 'Contact'} },
]

export default routes;