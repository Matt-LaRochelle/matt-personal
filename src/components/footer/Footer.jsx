import React from "react";
import styles from './Footer.module.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {

    const d = new Date();
    let year = d.getFullYear();

    return (
        <div className={styles.container}>
            <div className={styles.icons}>
                <a href='https://github.com/Matt-LaRochelle'><FaGithub className={styles.icon} /><p className={styles.p}>GitHub</p></a>
                <a href='https://www.linkedin.com/in/matthew-la-rochelle-565b41245/'><FaLinkedin className={styles.icon} /><p className={styles.p}>LinkedIn</p></a>
            </div>
            <p>Copyright {year}</p>
        </div>
    );
}

export default Footer;