import React from "react";
import './Destination.css';

import kerla from '../../Assets/Kerala-tourism.webp';
import mumbai from '../../Assets/mumabi-destination.jpeg';
import andaman from '../../Assets/package-img3.jpg';
import bali from '../../Assets/bali-image.webp';
import goa from '../../Assets/goa.webp';
import jaipur from '../../Assets/jaipur.jpg';

const Destination = () => {
    return (
        <div>


            <div className="destination" id="Destination">
                <p>Where do you want to unlock yourself?</p>
                <h1> Popular <span> Destination</span>
                </h1>

                <div className="card-box">

                    <div className="card-img">
                        <img src={mumbai} alt="" />

                        <h2> Mumbai</h2>

                        <p className="p-head"> Lorem ipsum dolor sit amet.</p>

                        <a href="#" className="destiny-btn"> Book Now</a>
                    </div>



                    <div className="card-img">
                        <img src={bali} alt="" />

                        <h2> Bali</h2>

                        <p className="p-head"> Lorem ipsum dolor sit amet.</p>

                        <a href="#" className="destiny-btn"> Book Now</a>
                    </div>


                    <div className="card-img">
                        <img src={goa} alt="" />

                        <h2> Goa</h2>

                        <p className="p-head"> Lorem ipsum dolor sit amet.</p>

                        <a href="#" className="destiny-btn"> Book Now</a>
                    </div>



                    <div className="card-img">
                        <img src={kerla} alt="" />

                        <h2> Kerla</h2>

                        <p className="p-head"> Lorem ipsum dolor sit amet.</p>

                        <a href="#" className="destiny-btn"> Book Now</a>
                    </div>

                    <div className="card-img">
                        <img src={andaman} alt="" />

                        <h2> Adaman</h2>

                        <p className="p-head"> Lorem ipsum dolor sit amet.</p>

                        <a href="#" className="destiny-btn"> Book Now</a>
                    </div>

                    <div className="card-img">
                        <img src={jaipur} alt="" />

                        <h2> Jaipur</h2>

                        <p className="p-head"> Lorem ipsum dolor sit amet.</p>

                        <a href="#" className="destiny-btn"> Book Now</a>
                    </div>

                </div>
                <br/>
                <br/>
                <div className="btn">
                    <a href="./Destination"> View More</a>
                </div>
            </div>

        </div>
    );
}
export default Destination;