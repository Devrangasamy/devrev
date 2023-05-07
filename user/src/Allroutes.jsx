import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login.js'
import Signup from './components/Signup.js'
import About from './components/About.js'
import FlightDetails from './components/Flightdetails'
import Adminlogin from  "./components/Adminlogin.js";
import Admin from './components/Admin.js';
import Booking from './components/booking';
import Addflights from './components/Addflights'
import ViewBooking from './components/ViewBooking'
import Viewflights from './components/Viewflights'
import Mybooking from './components/Mybooking'
import Editflight from "./components/Editflight"
function Allroutes() {
  return (
    <Routes>
            <Route path="/" element={<Home />} />
            
            <Route path="/About" element={<About />} />
            <Route path="/adminlogin" element={<Adminlogin />} />
            <Route path="/flightdetails" element={(localStorage.getItem("username")&&<FlightDetails />)||(<Login />)} />
            <Route path="/admin" element={(localStorage.getItem("admin")&&<Admin/>)||(<Adminlogin />)} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/booking" element={(localStorage.getItem("username")&&<Booking/>)||(<Login />)} />
            <Route path="/addflights" element={(localStorage.getItem("admin")&&<Addflights/>)||(<Adminlogin />)} />
            <Route path="/editflight" element={(localStorage.getItem("admin")&&<Editflight/>)||(<Adminlogin />)} />
            <Route path="/viewbooking" element={(localStorage.getItem("admin")&&<ViewBooking/>)||(<Adminlogin />)} />
            <Route path="/viewflights" element={(localStorage.getItem("admin")&&<Viewflights/>)||(<Adminlogin />)} />
            <Route path="/mybooking" element={(localStorage.getItem("username")&&<Mybooking/>)||(<Login />)} />
    </Routes>
  )
}

export default Allroutes