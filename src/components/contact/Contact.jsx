import React from "react";
import './contact.css';
import emailjs from 'emailjs-com';

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
        <div className="container">
            <div className="box">
                <form onSubmit={sendEmail}>
                    <h2>Contact</h2>
                    <div className="inputBox">
                        <input  
                            type="text" 
                            name="name" required="required" />
                        <span>Name</span>
                        <i></i>
                    </div>
                    <div className="inputBox">
                        <input  
                            type="email" 
                            name="email" required="required" />
                        <span>Email</span>
                        <i></i>
                    </div>

                    <textarea name="message" placeholder="Message" rows="12" required />
                    <input type="submit" value="Send"></input>
                
                </form>
            </div>
        </div>
    );
}

export default Contact