import React from "react";
import './contact.css';
import emailjs from 'emailjs-com';
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import Background from '../background/Background'

function Contact() {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_w5zw1tw', 'template_j6pjyk4', e.target, 'glIU5aKO-dstGXEV2').then(res=>{
            console.log(res);
            alert("Your email has been sent!");
        }).catch(err=> console.log(err));
        e.target.reset()
    }

    return (
        <div className="contact">
            <Navbar />
            <Background />
            <div className="contact__container">
                <div className="contact__box">
                    <span className="box__border"></span>
                    <form onSubmit={sendEmail}>
                        <h2>Contact</h2>
                        <div className="box__input">
                            <input  
                                type="text" 
                                name="name" 
                                required="required" />
                            <span>Name</span>
                            <i></i>
                        </div>
                        <div className="box__input">
                            <input  
                                type="email" 
                                name="email" 
                                required="required" />
                            <span>Email</span>
                            <i></i>
                        </div>
                        <div className="box__input">
                            <textarea 
                                name="message"
                                required="required" />
                            <span>Message</span>
                            <i></i>
                        </div>
                        
                        <input type="submit" value="Send"></input>
                    
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Contact