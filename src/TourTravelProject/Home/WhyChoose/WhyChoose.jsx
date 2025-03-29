import React from "react";
import './WhyChoose.css';
import map from '../../Assets/TRAVELLING-IMAGE.png';
import image1 from '../../Assets/money-hand.png';
import image2 from '../../Assets/amazing-destination.png';
import image3 from '../../Assets/personal-service.png';
import phonecall from '../../Assets/phoneCall.png';
import thumb from '../../Assets/thumb-icon.png';
import ruppe from '../../Assets/ruppes-icon.png';
import chat from '../../Assets/chat-icon.png';
import profile from '../../Assets/profile-icon.png';
const WhyChoose = () => {
    return (
        <div>
            <div className="whychoose">
                <div className="section">

                    <div className="img-item">
                        <img src={map} alt="" />
                    </div>

                    <div className="info-img">
                        <div className="heading-1">
                            <p>Go Travel. discover. Remember Us !</p>

                            <h1>Why Choose K-Travel ?</h1>

                        </div>
                        <div className="para-2">
                            <div className="box-detail">
                                <div className="img1">
                                    <img src={image1} alt="" />
                                </div>
                                <div className="box1">
                                    <h3>BEST PRICE GUARANTEED</h3>
                                    <p>Offerings its members an extensive selection of Hotels, Resorts, adventures & travel services to meet every budget and activities of every kind at competitive rates.</p>
                                </div>
                            </div>
                            <div className="box-detail">

                                <div className="img1">
                                    <img src={image2} alt="" />
                                </div>
                                <div className="box1">
                                    <h3>AMAZING DESTINATION</h3>
                                    <p>Enjoy premium resorts across India & overseas. Experience the best customer support.</p>
                                </div>
                            </div>
                            <div className="box-detail">

                                <div className="img1">
                                    <img src={image3} alt="" />
                                </div>
                                <div className="box1">
                                    <h3>PERSONAL SERVICES</h3>
                                    <p>Assured and best holiday booking & We commit to quality.Experience the best customer support </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="box2">
                    <div className="img2">
                        <img src={phonecall} alt="" />
                    </div>
                    <div className="box-info">
                        <p> Our 24/7  Emergency Phone Services</p>
                        <h2> Call : <span>1800180020</span> </h2>
                    </div>

                </div>
            </div>



            <div className="box3">
                <div className="box3-detail">

                    <hr className="top-hr" />
                    <div className="img3">
                        <img src={thumb} alt="" />
                    </div>
                    <div className="heading2">
                        <h2>Registered Agency</h2>
                    </div>
                    <hr className="bottom-hr" />
                </div>


                <div className="box3-detail">
                    <hr className="top-hr" />
                    <div className="img3">
                        <img src={ruppe} alt="" />
                    </div>
                    <div className="heading2">
                        <h2>Interesting Packages </h2>
                    </div>
                    <hr className="bottom-hr" />
                </div>


                <div className="box3-detail">
                    <hr className="top-hr" />
                    <div className="img3">
                        <img src={chat} alt="" />
                    </div>
                    <div className="heading2">
                        <h2>Best Support</h2>
                    </div>
                    <hr className="bottom-hr" />
                </div>


                <div className="box3-detail">
                    <hr className="top-hr" />
                    <div className="img3">
                        <img src={profile} alt="" />
                    </div>
                    <div className="heading2">
                        <h2>Experienced Tour Leader</h2>
                    </div>
                    <hr className="bottom-hr" />
                </div>
            </div>

        </div >


    )
}
export default WhyChoose;