import React from 'react'
import NavBar from './NavBar'
import Hero from './Hero'
import SolutionSite from './SolutionSite'
import Footer from './Footer'


export default function ServicePage(){
    return (
        <div>
            <NavBar />
            <img className="shapes two" src="./tefoImage/shape2.png" alt="" />
            <Hero />
            <img className="shapes seven" src="./tefoImage/shape6.png" alt="" />
            <img className="shapes eight" src="./tefoImage/Rectangle 12solsuites.png" alt="" />
            <SolutionSite />
            <Footer />
        </div>
    )
}