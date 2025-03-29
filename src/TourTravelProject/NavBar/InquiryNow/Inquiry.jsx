import React from "react";
import './Inquiry.css';
import bgImg from '../../Assets/background-image.jpg';
import feature from '../../Assets/feature-img.png';
import Footer from "../../Home/Footer/Footer";
class Inquiry extends React.Component {


    constructor(props) {
        super(props);
        this.state = {                                 // Sate
            username: null,                       // Props  --- username /
            // roll_no are assigned as name of the text box
            email: null,
            errormessage: ""
        };
    }

    myChangeHandler = (event) => {                    // on text change event handler for the text box
        let fieldName = event.target.name;
        let fieldValue = event.target.value;
        let err = '';
        if (fieldName === "roll_no") {                                             // validation check for roll_no field

            if (fieldValue !== "" && !Number(fieldValue)) {
                err = <strong>Your roll_no must be a number</strong>
            }
        }
        this.setState({ errormessage: err });         // display error value

        this.setState({ [fieldName]: fieldValue });   // set value of the  <h1>= name entered in the text box via databinding
    }                                                 // [] as fieldName is a placeholder replaced with actual field name 'username/roll_no'

    submitHandler = (event) => {                       // on form submission event handler
        event.preventDefault();                       // prevent default form data submission to the server
        alert(this.state.username + '  Your Inquiry form has been succcessfully registers')

    }

    render() {
        return (
            <div className="inquiry" id="#Inquiry">
                <div className="img1-container">
                    <img src={bgImg} alt="" />
                </div>
                <div className="form-section">
                    <div className="left-box1">
                        <div className="heading-info">
                            <p>Fill the Form !!</p>
                            <h1>Get Inquiry Now !!</h1>
                        </div>

                        <form onSubmit={this.submitHandler}>
                            <h2> Hello <span>{this.state.username}</span> </h2>
                            <p> Register your name :</p>
                            <input
                                type='text'
                                name='username'
                                onChange={this.myChangeHandler}
                            />
                            <p> Enter your E-mail :</p>
                            <input
                                type="email"
                                name="Email"
                                onChange={this.myChangeHandler}
                            />
                            <div className="inquiry-info">
                                
                                <input
                                    type="text"
                                    name="text"
                                    placeholder="Contact no"
                                    onChange={this.myChangeHandler}
                                />
                                
                                <input
                                    type='text'
                                    name='text'
                                    placeholder="Travel Destination"
                                    onChange={this.myChangeHandler}
                                />
                            </div>
                            <div className="msg-info">
                            <input
                                type='text'
                                name='text'
                                placeholder="Message"

                            />
                            </div>
                            <br /><br />
                            <div className="submit">
                            <input type="submit" value="Submit" /><br />
                            {this.state.errormessage} <br />
                            {this.state.email}

                            </div>
                            
                            
                        </form>
                    </div>

                    <div className="side-box">
                        <img src={feature} alt="" />
                    </div>
                </div>
                <Footer/>
            </div>
        
        );
    }
}

export default Inquiry;

