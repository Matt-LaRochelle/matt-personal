import React from "react";
import './footer.css'
// import { AiFillGithub, AiOutlineLinkedin } from 'react-icons/ai'

function Footer() {

    const d = new Date();
    let year = d.getFullYear();

    return (
        <footer className="footer">
            <p className="footer__year">&copy; Copyright {year}</p>
            <div className="footer__links">
                <a href='https://github.com/Matt-LaRochelle' target="_blank"><p className="links__p">GitHub</p></a>
                <a href='https://www.linkedin.com/in/matthew-la-rochelle-565b41245/' target="_blank"><p className="links__p">LinkedIn</p></a>
                {/* <a href='https://github.com/Matt-LaRochelle'><AiFillGithub className={styles.icon} /><p className={styles.p}>GitHub</p></a>
                <a href='https://www.linkedin.com/in/matthew-la-rochelle-565b41245/'><AiOutlineLinkedin className={styles.icon} /><p className={styles.p}>LinkedIn</p></a> */}
            </div>
        </footer>
    );
}

export default Footer;