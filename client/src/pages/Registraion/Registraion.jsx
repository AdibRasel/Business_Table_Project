import React, { useRef } from 'react';
import "./RegistrationCss.css"
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import axios from 'axios';
import { RegistrationRequest } from '../../APIRequest/APIRequest';

const BaseURL = "http://localhost:5000/api/v1"

function Registraion() {


    let EmailRef, FirstNameRef, LastNameRef, MobileRef, PasswordRef, ConfirmPasswordRef = useRef();
    // Registration Request function
    const Submit=()=>{
    
        let Email = EmailRef.value;
        let FirstName = FirstNameRef.value;
        let LastName = LastNameRef.value;
        let Mobile = MobileRef.value;
        let Photo = "Photolink"
        let Password = PasswordRef.value;
        let ConfirmPassword = ConfirmPasswordRef.value;

        RegistrationRequest(Email, FirstName, LastName, Mobile, Password, Photo).then((result)=>{
            if(result===true){
                alert('Registration Success');
                // navigateUse ("/LoginPage")
            }

            // LoderDisplay.classList.remove("Display_None")
        })
    }



    return (
        <div>
            <Header />

            <div className="Registraion">
                <form action="" className='RegistraionForm'>
                    <h3>Registraion</h3>
                    <div className="Registraion_Name">
                        <div className="FirstName">
                            <label>First Name</label> <br /> 
                            <input ref={(input)=>FirstNameRef=input} id='FirstName' placeholder='First Name' type="text" />
                        </div>
                        <div className="LastName">
                            <label>Last Name</label> <br />
                            <input ref={(input)=>LastNameRef=input} id='LastName' placeholder='Last Name' type="text" />
                        </div>
                    </div>
                    <div className="Mobile_Email">
                        <div className="Mobile">
                            <label>Mobile Number</label> <br />
                            <input ref={(input)=>MobileRef=input} id='Mobile' placeholder='Mobile Number' type="text" />
                        </div>
                        <div className="Email">
                            <label >Email Address</label> <br />
                            <input ref={(input)=>EmailRef=input} id='Email' placeholder='Email Address' type="email" />
                        </div>
                    </div>
                    <div className="Image">
                        <label>Image</label> <br />
                        <input ref={(input)=>Image=input} id="Image" type="file" name="" />    
                    </div>
                    <div className="Password">
                        <div className="NormalPassword">
                            <label>Password</label> <br />
                            <input ref={(input)=>PasswordRef=input} id='Password' placeholder='Password' type="password" />
                        </div>
                        <div className="ConfirmPassword">
                            <label>Confirm Password</label> <br />
                            <input ref={(input)=>ConfirmPasswordRef=input} id='ConfirmPassword' placeholder='Confirm Password' type="password" />
                        </div>
                    </div>
                    <button onClick={Submit} className='RegistrationSubmitBtn'>Submit</button>
                </form>
            </div>



            <Footer />
        </div>
    );
}

export default Registraion;