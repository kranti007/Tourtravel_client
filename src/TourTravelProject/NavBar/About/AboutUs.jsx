
import React from "react";
import './AboutUs.css';
import bgImg from '../../Assets/background-image.jpg';
import tourImg from '../../Assets/tour-img.jpg';
import mision from '../../Assets/mision-img.webp';
import vision from '../../Assets/vision-img.webp';
import Footer from "../../Home/Footer/Footer";

const AboutUs = () => {
    return (
        <div className="aboutus">
            <div className="img1-container">
                <img src={bgImg} alt="" />
            </div>
            <div className="para-1">
                <p>MAKE YOUR HOLIDAYS MEMORABLE FOR A LIFE WITH</p>

                <h1>THE <span> K - TRAVELS </span></h1>

                <h2>We are the best<span> Travel Company in India </span>offering<br />
                    Affordable Family Holidays for Domestic and International Destinations</h2>

                <h6>K - Travels  is the Brand of Company Kranti Holidays and Resorts Private Limited, into Leisure and Hospitality across the INDIA and ASIA, offers Budget friendly quality family holidays primarily through vacation ownership memberships and brings to the industry values such as reliability, trust and customer satisfaction. Started in 2018, the company's flagship brand ‘K -travels", today has over 8000 members, who can holiday at 100+ resorts in India and asia
                    <br />
                    <br />
                    K-travels & Resorts India Limited is part of Holiday and Tourism sector and provide various services to its customers. Rao Holidays Brand is one of the fastest growing Company in INDIA and ASIA.</h6>

            </div>

            <div className="cards">
                <div className="card-detail">
                    <div className="card1">
                        <h1> Coustomer Support</h1>
                        <p>You are only a phone call away from the K - Travels customer Support.</p>
                    </div>

                    <div className="card1">
                        <h1> Value for Money</h1>
                        <p>K - Travls gives you Value for Money Deals on your Upcoming Family Holidays</p>
                    </div>


                    <div className="card1">
                        <h1> Destination Experts</h1>
                        <p>You will be a Explorer with our Local Travel itinerary planning and Support</p>
                    </div>
                </div>
            </div>


            <div className="tour-img">
                <img src={tourImg} alt="" />
            </div>
            {/* /**   ***************** Mision Vision section  *************/}

            <div className="mision">
                <h3> What we Do ? </h3>
                <h1> Our Mision<span> Vision</span> </h1>

                <div className="cards2">
                    <div className="img2">
                        <img src={mision} alt="" />
                    </div>
                    <div className="img-info">
                        <h4>What We Do ?</h4>
                        <h2> Our Mision</h2>
                        <p>To create a community of happy and satisfied travellers through professionally planned Holiday Membership with a personal touch</p>

                    </div>
                </div>

                <div className="cards2">
                    <div className="img3">
                        <img src={vision} alt="" />
                    </div>
                    <div className="img-info2">
                        <h4>What We Do ?</h4>
                        <h2> Our Vision</h2>
                        <p>To become India's most admired Travel Management Company with a family of versatile travellers from all over the country.</p>

                    </div>


                </div>
            </div>

           <Footer/>
        </div>
    )
}
export default AboutUs;