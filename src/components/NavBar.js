import React from "react"
import {  Link } from "react-router-dom";

/* export default function NavBar(){
    return (
        <>
            <nav>
                <div >
                    <img src="./tefoImage/logo.png" className="logo" alt="" />
                </div>
                <a href="/" ><Link to="/">Home</Link></a>
                <a href="/" ><Link to="/AboutUs">About us</Link></a>
                <a href="/"><Link to="/ServicePAge">Service</Link></a>
                <button className="right"><Link to="/ContactPage">Get in Touch</Link></button>
            </nav>
            <Outlet />
        </>
        
    )
} */

export default function NavBar(){
    return (
    
        <nav>
            <img src="./tefoImage/logo.png" className="logo" alt="" />
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/service">Service</Link></li>
                <li><Link to="/About">About Us</Link></li>
            </ul>
            <button className="right"><Link to="/Contact">Get in Touch</Link></button>
        </nav>
        
       
    )
}