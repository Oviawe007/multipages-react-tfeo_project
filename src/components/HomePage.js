import React from "react"
import NavBar from "./NavBar"
import Footer from "./Footer"
import Header from "./Header"
import Product from "./Product"
import Service from './Service' 

export default function HomePage(){
    return (
        <>
            <NavBar />
            <Header />
            <Product />
            <Service />
            <Footer />
        </>
    )
}