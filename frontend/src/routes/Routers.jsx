import React from "react";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Contact from "../pages/Contact";
import Doctor from "../pages/Doctors/Doctor";
import DoctorDetails  from '../pages/Doctors/DoctorDetails';
import {Routes,Route} from 'react-router-dom'
import { Navigate } from "react-router-dom";

const Router = () =>{
    return <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/home" element={<Navigate to="/" replace={true} />}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/doctors" element={<Doctor/>}/>
        <Route path="/doctors/:id" element={<DoctorDetails/>}/>
        
    </Routes>
}

export default Router