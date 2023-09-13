import React from "react";
import './footer.css'
// import { AiFillGithub, AiOutlineLinkedin } from 'react-icons/ai'

function Footer() {

    const d = new Date();
    let year = d.getFullYear();

    return (
        <div className="footerContainer">
            <p className="year">Copyright {year}</p>
            <div className="icons">
                <a href='https://github.com/Matt-LaRochelle'><p className="p">GitHub</p></a>
                <a href='https://www.linkedin.com/in/matthew-la-rochelle-565b41245/'><p className="p">LinkedIn</p></a>
                {/* <a href='https://github.com/Matt-LaRochelle'><AiFillGithub className={styles.icon} /><p className={styles.p}>GitHub</p></a>
                <a href='https://www.linkedin.com/in/matthew-la-rochelle-565b41245/'><AiOutlineLinkedin className={styles.icon} /><p className={styles.p}>LinkedIn</p></a> */}
            </div>
        </div>
    );
}

export default Footer;