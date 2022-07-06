import React from 'react'
import Contact from './Contact'
import NavBar from './NavBar'
import Footer from './Footer'

export default function ContactPage(){
    return (
        <div>
            <NavBar/>
            <img className="shapes two" src="./tefoImage/shape2.png" alt="" />
            <Contact/>
            <Footer/>

        </div>
    )
}