import React from "react";
import './Contact.css';
import bgImg from '../../Assets/background-image.jpg';
import Footer from "../../Home/Footer/Footer";
const Contact = () => {
    return (
        <div className="contact">
            <div className="bg-img">
                <img src={bgImg} alt="" />
            </div>
            <div className="contact-box">
                <div className="contact-info">
                    <h2 >Contact no</h2>
                    <p>1800180020</p>
                    <p>1800180022</p>
                   
                </div>

                <div className="contact-info">
                    <h2 >Email Address </h2>
                    <p>k-travel@gmail.com</p>
                </div>


                <div className="contact-info">
                    <h2 >Location</h2>
                    <p>Building 18, Pune City, 106, Triveni Nagar Nigadi 303, Avenue I, Pune, Maharashtra 401303</p>
                </div>


            </div>
            <Footer/>
        </div>
    
    )
}
export default Contact;