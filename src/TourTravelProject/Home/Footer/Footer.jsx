import React from "react";
import './Footer.css';
import { Link } from 'react-router-dom';
import bgImg from '../../Assets/background-image.jpg';

import phone from '../../Assets/phoneCall.png';
const Footer = () =>{
    return(
        <div className="contact" id="Contact">
            <div className="moreUpdate">
            <img src={bgImg} alt="" />
                <div className="update">

                    <div className="part-left">
                        <h1>Let's Call Us For More Update !!</h1>
                        <p>We Travel Not to Escape Life but For Life not to Escape Us.</p>
                    </div>

                    <div className="part-right">
                        <div className="img4">
                            <img src={phone} alt="" />
                        </div>

                        <div className="info1">
                   
                            <p>1800180020</p>
                            <div className="btn">
                                <a href="./" >
                                    Contact Us
                                </a>
                            </div>


                        </div>
                    </div>
                </div>
            </div>


            <div className="contact-us">
                <div className="Heading">
                    <h1> K- Travel</h1>
                    <p>K -Travel is the Brand of Company Kranti  Holidays and Resorts Private Limited. (KHRPL), into Leisure and Hospitality across the INDIA and ASIA</p>

                    <div className="icon">
                        <i><i class="fa-brands fa-facebook"></i></i>
                        <i><i class="fa-brands fa-twitter"></i></i>
                        <i><i class="fa-brands fa-instagram"></i></i>
                        <i><i class="fa-brands fa-linkedin"></i></i>
                    </div>
                </div>

                <div className="Quick_link">
                    <h2>Quick Links</h2>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <hr />
                        <li><a href="/AboutUs">About Us</a></li>
                        <hr />
                        <li><a href="/Packages">Packages</a></li>
                        <hr />
                        <li><a href="/Destination">Destination</a></li>
                        <hr />
                        <li><a href="/Inquiry">Inquiry Now</a></li>
                        <hr />
                        <li><a href="/ContactUs">Contact Us</a></li>

                    </ul>
                </div>

                <div className="Policy">
                    <h2>Policy</h2>
                    <ul>
                        <li><Link to="/Terms" className="li">Terms Of Use</Link></li>
                        <hr />
                        <li><Link to="/Privacy" className="li">Privacy Policy</Link></li>
                        <hr />
                        <li><Link to="/Payment" className="li">Payment Policy</Link></li>

                    </ul>
                </div>

                <div className="contact_info">

                    <h2>Contact Info</h2>

                    <ul>
                        <li>Building 18, Pune City, 106,  Triveni Nagar Nigadi 303, Avenue I, Pune, Maharashtra 401303</li>
                        <li>1800180022</li>
                        <li>k-travel@gmail.com</li>

                        <li>www.kTravel.in </li>

                    </ul>

                </div>

            </div>
        </div>
    )
}
export default Footer;