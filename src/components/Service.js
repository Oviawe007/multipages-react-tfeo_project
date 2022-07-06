import React from "react"

export default function Service(){
    return (
        
        <div className="service">
            <h2><span>Our Services Offering</span></h2>
            <p>TFEO  has designed and built innovative business network that offers Guaranteed Operational Efficiency at every stage. Scalabiity is available both ways, thereby allowing you to update or downscale as appropriate.</p>
            <div className="service--detail">
                <img src="./tefoImage/service-img.png" alt="" width="50%" />
                <div className="service--text">
                    <div className="service--right">
                        <h3><span>IT INFRASTRUCTURE</span></h3>
                        <ul>
                            <li>Data Center Services</li>
                            <li>Collaboration Services</li>
                            <li>Managed Network</li>
                            <li>Infrastructure and Cloud Solutions</li>
                            <li>power Solution</li>
                            <li>Cloud CCTV</li>
                        </ul>

                    </div>
                    <div className="service--right">
                        <h3><span>ICT CONSULTING & OUTSIURCING</span></h3>
                        <ul>
                            <li>Business Automation</li>
                            <li>Project Management</li>
                            <li>Mobile Development</li>
                        </ul>

                    </div>
                    <div className="service--right">
                        <h3><span>WEB SERVICES</span></h3>
                        <ul>
                            <li>Website Developmet</li>
                            <li>Social Media Integration & Customization</li>
                            <li>Hosting & Domain Name Registration</li>
                        </ul>

                    </div>
                
                </div>

            </div>
        </div>

      
    )
}