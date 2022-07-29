import React from "react";
import {NavLink} from 'react-router-dom'
import './Navbar.css'

const Navbar =()=>{
    return (
        <>
        <NavLink className="nav" to='/'>Login</NavLink>
        <NavLink className="nav" to='/dashboard'>Dashboard</NavLink>
        </>
    )
}
export default Navbar;