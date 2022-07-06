import React , { useState }from "react"
import {  Link } from "react-router-dom";



// export default function NavBar(){
//     return (
    
//         <nav>
//             <Link to="/"><img src="./tefoImage/logo.png" className="logo" alt="" /></Link>
//             <ul>
//                 <li><Link to="/">Home</Link></li>
//                 <li><Link to="/About">About Us</Link></li>
//                 <li><Link to="/service">Service</Link></li>
//             </ul>
//             <button className="right"><Link to="/Contact">Get in Touch</Link></button>
//         </nav>
        
       
//     )
// }

export default function NavBar(){

    const [isOpen , setIsOpen] = useState(false)
    return (
        <div className="Navbar">
           <Link to="/"><img src="./tefoImage/logo.png" className="logo" alt="" /></Link>
            <div className={`nav-items ${isOpen && "open"}`}>
                <a href="/">Home</a>
                <a href="/About">About</a>
                <a href="/service">Service</a>
                <a href="/Contact">Contact</a>
            </div>
            <button className="btn"><Link to="/Contact">Get in Touch</Link></button>
            <div 
                className={`nav-toggle ${isOpen && "open"} `} 
                onClick={()=>setIsOpen(!isOpen)}
            >
                <div className="bar"></div>
            </div>

        </div>
    )
}