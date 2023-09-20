import React from 'react'
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Student from './Student'
import Contact from './Contact'
import NewStudent from './NewStudent'
import EditStudent from './EditStudent'
import './Style.css'

const RouteCompo = () => {
  return (
    <>
     
      <BrowserRouter>
      <div className='navbar'>
      <NavLink to='/' >Home</NavLink>
      <NavLink to='/student' >Student</NavLink>
      <NavLink to='/contact' >Contact</NavLink>
     </div>
      <Routes>
        <Route path='/' element={<Home/>}>Home</Route>
        <Route path='/student' element={<Student/>}>Student</Route>
        <Route path='/contact' element={<Contact/>}>Contact</Route>
        <Route path='/newstudent' element={<NewStudent/>}>NewStudent</Route>
        <Route path='/editstudent' element={<EditStudent/>}>EditStudent</Route>
      </Routes>
   
      </BrowserRouter>
    </>
  )
}

export default RouteCompo
