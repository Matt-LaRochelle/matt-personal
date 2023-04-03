import React from "react";
import styles from './Contact.module.css';
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
        <div className={styles.container}>
            <h1 className={styles.h1}>Contact</h1>
            <form className={styles.form} onSubmit={sendEmail}>
                <input className={styles.input} type="text" placeholder="Name" name="name" required />
                <input className={styles.input} type="email" placeholder="Email" name="email" required />
                <textarea className={styles.input} name="message" placeholder="Message" rows="12" required />
                <button className={styles.btn} type="submit">Send</button>
            </form>
        </div>
    );
}

export default Contact