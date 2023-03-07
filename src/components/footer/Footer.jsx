import React from "react";
import styles from './Footer.module.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {
    return (
        <div className={styles.container}>
            <div className={styles.icons}>
                <a href='https://github.com/Matt-LaRochelle'><FaGithub className={styles.icon} /></a>
                <a href='https://www.linkedin.com/in/matthew-la-rochelle-565b41245/'><FaLinkedin className={styles.icon} /></a>
            </div>
            <p>larochelle.matthew@gmail.com</p>
            <p>Copyright 2023</p>
        </div>
    );
}

export default Footer;