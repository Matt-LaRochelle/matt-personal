import React from "react";
import styles from './Contact.module.css';

function Contact() {
    return (
        <div className={styles.container}>
            <h1 className={styles.h1}>Contact</h1>
            <form className={styles.form}>
                <input className={styles.input} type="text" placeholder="Name" name="name" />
                <input className={styles.input} type="email" placeholder="Email" name="email" />
                <textarea className={styles.input} name="message" placeholder="Message" rows="12" />
                <input className={styles.btn} type="submit" value="Send" />
            </form>
        </div>
    );
}

export default Contact