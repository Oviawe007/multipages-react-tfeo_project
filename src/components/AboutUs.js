import React from "react"
import NavBar from "./NavBar"
import Footer from "./Footer"
import Header from "./Header"
import Product from "./Product"
import Service from './Service'

export default function AboutUs(){
    return (
        <>
            <NavBar />
            <img className="shapes one" src="./tefoImage/shape1.png" alt="" />
            <img className="shapes two" src="./tefoImage/shape2.png" alt="" />
            <img className="shapes three" src="./tefoImage/shape4.png" alt="" />
            <img className="shapes four" src="./tefoImage/shape5.png" alt="" />
            <Header />
            <img className="shapes five" src="./tefoImage/shape3.png" alt="" />
            <Product />
            <img className="shapes six" src="./tefoImage/Rectangle 6oursev.png" alt="" />
            <Service />
            <Footer />
        </>
    )
}