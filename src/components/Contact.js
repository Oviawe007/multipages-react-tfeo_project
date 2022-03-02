import React from 'react'

export default function Contact(){
    return(
        <div className="contact">
            <div>
                <h3><span>Get in touch</span></h3>
            </div>
            <div className="contact--card">
                <img src="./tefoImage/Get in touch.gif" alt="" className="contact--img" />
                <div className="form">
                    <label>Full Name: <br/><input type="text" name="name" /></label><br/>
                    <label>Email Address: <br/><input type="email" name="email"/></label><br/>
                    <label>Phone Number: <br/><input type="text" name="phone"/></label><br/>
                    <label>Text Message: <br/><textarea  type="text" name="text-message" rows="10" cols="20"></textarea></label><br/>
                    <button type="submit" className="btn">Send Message</button>
                </div>
            </div>
        </div>
    )
}