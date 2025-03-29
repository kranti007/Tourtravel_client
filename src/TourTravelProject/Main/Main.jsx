import React from "react";
import Home from "../Home/Home";


import About from "../Home/About/About";
import Destination from "../Home/Destination/Destination";
import Footer from "../Home/Footer/Footer";
import Container from "../Home/OurService/Container";
import WhyChoose from "../Home/WhyChoose/WhyChoose";



const Main = () =>{
    return(
        <div>
            <Home/>
            <About/>
            <Container/>
            <Destination/>
            <WhyChoose/>
            <Footer/>
            
            
            
        </div>
    )
};
export default Main;