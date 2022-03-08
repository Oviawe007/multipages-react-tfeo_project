import React from 'react'

export default function Contact(){

    const [formData , setFormData] = React.useState({
        fullname : "",
        email : "",
        phone: "",
        message : ""
    })

    function handleChange(event){
        const {name , value } = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name ] : value
            }
        })
    }

    function handleSubmit(event) {

        alert(`Thanks for Reaching out ${formData.fullname}, Your details are safe with us.\nsubmitted successfully!`)
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                fullname : "",
                email : "",
                phone: "",
                message : ""
                
            }
        })

        event.preventDefault()

    }


    return(
        <div className="contact">
            <div>
                <h3><span>Get in touch</span></h3>
            </div>
            <div className="contact--card">
                <img src="./tefoImage/Get in touch.gif" alt="" className="contact--img" />
                <form className="form" onSubmit={handleSubmit}>
                    <label>Full Name: <br/>
                        <input 
                            type="text" 
                            name="fullname" 
                            value={formData.fullname} 
                            onChange={handleChange} 
                            required
                        />
                    </label>
                    <br/>
                    <label>Email Address: <br/>
                        <input 
                            type="email" 
                            name="email" 
                            value={formData.email} 
                            onChange={handleChange} 
                            required
                        />
                    </label>
                    <br/>
                    <label>Phone Number: <br/>
                        <input 
                            type="text" 
                            name="phone" 
                            value={formData.phone} 
                            onChange={handleChange} 
                            required
                        />
                    </label>
                    <br/>
                    <label>Text Message: <br/>
                        <textarea  
                            type="text" 
                            name="message" 
                            rows="10" cols="20" 
                            value={formData.message} 
                            onChange={handleChange} 
                            required
                        />
                    </label>
                    <br/>
                    <button type="submit" className="btn">Send Message</button>
                </form>
            </div>
        </div>
    )
}