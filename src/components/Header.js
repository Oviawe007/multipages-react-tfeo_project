import React from "react"
import Typical from "react-typical"
import { Link } from "react-router-dom"



export default function Header(){
    return (
        <div className="header">
            <div className="header--text">
                <h3>Tech Solution is Our Craft</h3>
                <h2 > 
                    <Typical
                        loop ={Infinity}
                        wrapper="span"
                        steps={["We Build Web Applications", 
                        2000,
                        "We Offer IT Solutions", 2000,
                        "We Provide Infrastructural Services", 2000
                    ]}
                    ></Typical>
                </h2>
                <p>From analysing systems to planning and execution, we can help <br />you determine what steps to take to fill the gaps in your current <br />business technology. </p>
                <button className="btn"><Link to="/Contact">Get in Touch &#8594;</Link></button>
          </div>
          <div>
              <img src="./tefoImage/Business deal-bro.png"  alt="" width="300px"/>
          </div>


        </div>
    )
}