import React from "react";
import './NavBar.css';
import { Link } from 'react-router-dom';
import logo from'../Assets/k-logo.png';
const NavBar = () => {
    return (
        <div>
            <section>
                {/* <div className="bg-img">
                    <img src={bgImg} alt="" />
                 */}
                <div className="nav-bar">
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>

                    <ul>
                        <Link to="/" className="li"> Home</Link>
                        <Link to="/AboutUs" className="li">AboutUs </Link>
                        <Link to="/packages" className="li">Packages</Link>
                        <Link to="/Destination" className="li">Destination</Link>
                        <Link to="/Inquiry" className="li">Inquiry Now</Link>
                        <Link to="/Contact" className="li">Contact Us</Link>
                       
                    </ul>

                    <div className="login">
                        
                    <Link to="/SignUp" className="li"> Sign up</Link>
                    

                    </div>
                </div>
                </section>
                </div>
    )
}
export default NavBar;