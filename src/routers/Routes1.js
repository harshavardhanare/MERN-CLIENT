import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Login } from './Login'
import { ContactUS } from './ContactUS'
import { Aboutus } from './Aboutus'
import { Home } from './Home'
import { NavLink } from 'react-router-dom'
export const Routes1 = () => {
  return (
    <div>
      <nav>
        <ul>
        <li>
          <NavLink to="/Home">Home
        </NavLink>
        </li>
        <li> <NavLink to="/login">Login
        </NavLink></li>
        <li> <NavLink to="/aboutus">Aboutus
        </NavLink></li>
        <li> <NavLink to="/contactus">ContactUS
        </NavLink></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/Home" element={<p><Home/></p>}>   </Route>
        <Route path="/login" element={<p><Login/></p>}> </Route>
        <Route path="/contactus" element={<p><ContactUS/></p>}> </Route>
        <Route path="/aboutus" element={<p><Aboutus/></p>}> </Route>
       
           </Routes></div>
  )
}
