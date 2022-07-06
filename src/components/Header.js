import React from "react"
import Typical from "react-typical"
import { Link } from "react-router-dom"



export default function Header(){
    return (
        <div className="header">
            <div className="header--text">
                <h3>Tech Solution is Our Craft</h3>
                <h2 > We 
                    <Typical
                        loop ={Infinity}
                        wrapper="span"
                        steps={[" Build Web Applications.", 
                        2000,
                        " Offer IT Solutions.", 2000,
                        " Provide Infrastructural Services.", 2000
                    ]}
                    ></Typical>
                </h2>
                <p>From analysing systems to planning and execution, we can help you determine what steps to take to fill the gaps in your current business technology. </p>
                <button className="btn"><Link to="/Contact">Get in Touch &#8594;</Link></button>
          </div>
          <div>
              <img src="./tefoImage/Business deal-bro.png"  className="hImage"alt="" width="300px"/>
          </div>


        </div>
    )
}