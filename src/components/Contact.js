import React, { useRef , useState }from 'react'
import emailjs from '@emailjs/browser';
//import Alert from 'react-bootstrap/Alert'

export default function Contact(){

    const form = useRef();

    const [showAlert , setShowAlert] = useState(false)


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

        //alert(`Thanks for Reaching out ${formData.fullname.toUpperCase()}, Your details are safe with us.`);
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                fullname : "",
                email : "",
                phone: "",
                message : ""
                
            }
        })
        setShowAlert(setTimeout(prevState => !prevState),100)
        

        emailjs.sendForm('service_4u2e11f', 'template_f25otzt', form.current, 'Wx5iaUJef1vFsprh7')
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });

        event.preventDefault()

    }


    return(
        <div className="contact">
            <div>
                <h3><span>Get in touch</span></h3>
            </div>
            <div className="contact--card">
                <img src="./tefoImage/Get in touch.gif" alt="" className="contact--img" />
                <form className="form"  ref={form} onSubmit={handleSubmit}>
                    {showAlert&&<p className="alert">Thank you for contacting us...</p>}
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