import React from "react";
import './Home.css';
import image1 from '../Assets/image1.jpg';
import image2 from '../Assets/image2.jpeg';
import image3 from '../Assets/image3.jpg';

const Home = () => {
    return (
        <div>
            <div className="main-container" >
                {/* <div className="bg-img">
                    <img src={bgImg} alt="" />
                 */}

                <div className="main"> 
                    <div className="heading">
                        <h1>TRAVEL THE <span>World</span></h1>
                        <p className="sub-heading">Custom-Crafted Tour Packages for Unforgettable Holiday Experiences in world.</p>
                    </div>
                    <a href="./AboutUS"> Explore Now</a>
                    <div className="box-content">
                        <img src={image1} alt="" />
                        <img src={image2} alt="" />
                        <img src={image3} alt="" />
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Home;