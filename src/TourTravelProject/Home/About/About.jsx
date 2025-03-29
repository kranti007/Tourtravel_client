import React from "react";
import './About.css';
import about from '../../Assets/kamshet.jpg';
import goa from '../../Assets/goa.webp';
import bali from '../../Assets/bali-image.webp';
const About = () => {
    return (
        <>
            <div className="about" >
                <div className="left">
                    <div className="info">
                        <div className="info-content">
                            <h1>Something you want to know about us!!</h1>

                            <a href="./AboutUs"> Learn More</a>
                        </div>


                        <div className="upper-img">
                            <img src={about} alt="" />
                        </div>
                    </div>
                    <div className="bottom-img">
                        <div className="img1">
                            <img src={goa} alt="" />
                        </div>

                        <div className="right-img">
                            <img src={bali} alt="" />
                        </div>


                    </div>


                </div>

                <div className="right">
                    <p className="about-p">
                        Explore All Corners of the World with us
                    </p>
                    <h1> Welcome to <span>K-Travel</span></h1>

                    <p className="para-2">K-Travels, a complete Destination Management Company and  adventure tour specialist,  provide comprehensive travel  packages for  adventure, leisure, group,  corporate  as well as individual travellers.The company has been growing steadily and in the process innovating its product range, launching new ideas and rediscovering new destinations to increase its service range.
                        <br>
                        </br>
                        <br>
                        </br>

                        At K-travel we are adaptable to our client’s ideas and specific requirements which has  helped us to become  one of the most sought after  travel companies in the country, providing excellent support to individual and group travellers, catering to their specific requirements.
                    </p>
                    <br/>
                    <br/>
                    <br/>
                    <div className="btn">
                        <a href="./AboutUs"> View More About Us</a>
                    </div>

                </div>

            </div>


        </>
    )
};
export default About;