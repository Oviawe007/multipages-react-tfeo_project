import React from "react"

export default function Product(){
    return(
        <div className="product">
            <h2><span>Our Products</span></h2>
            <p>Impact - driven technology, Future proof your business with our host of enteprise solutions</p>
            <div className="prod--card">
                <div className="card">
                    <img src="./tefoImage/prod-img1.png" alt=""   className="card-img"/>
                    <h3>TFEO IT INFRASTRUCTURE</h3>
                    <p>Cloud CCTV, Data center services, Power Solutions, LAN Cabling Copper, Supply of IT Consumables, Fibre Optics, IP Infrastructure, Collaboration Services.</p>
                </div>
                <div className="card">
                    <img src="./tefoImage/prod-img2.png" alt=""   className="card-img"/>
                    <h3>TFEO ICT CONSULTING & OUTSOURCING</h3>
                    <p>Business Automation, Project Management, Mobile Application Development</p>
                </div>
                <div className="card">
                    <img src="./tefoImage/prod-img3.png" alt=""   className="card-img"/>
                    <h3>TFEO WEB SERVICES</h3>
                    <p>Website Development, Social Media Integration & Customization, Hosting & Domain Name Registration, Digital Marketing,Content Management Systems.</p>
                </div>

            </div>
        </div>
    )
}