import styles from './Projects.module.css'
import { FaReact, FaHtml5, FaCss3, FaNodeJs } from 'react-icons/fa';
import {IoLogoJavascript} from 'react-icons/io';
import {SiMongodb, SiExpress} from 'react-icons/si';
import bingo from '../images/bingo2.png'

const Bingo = () => {
    return (
        <div className={styles.project}>
            <div className={styles.project_content}>
                <div className={styles.text}>
                    <h3>Bingo Cards</h3>
                    <p>A website that allows you to make custom bingo cards</p>
                    <div className={styles.login}>
                        <h3>Login: <span>testuser@testing.user</span></h3>
                        <h3>Password: <span>ABCabc123!</span></h3>
                    </div>
                    
                    <h3>Design and Features</h3>
                    <ul>
                        <li>Login authentication blocks access for unregistered users</li>
                        <li>Reset password functionality</li>
                        <li>Save multiple collections of bingo cards</li>
                        <li>Create and download randomized PDF's for your bingo games</li>
                        <li>Simple and intuitive UX</li>
                    </ul>
                    <h3>Technologies used:</h3>
                    <p><FaHtml5 /> <span>HTML</span></p>
                    <p><FaCss3 /> <span>CSS</span></p>
                    <p><IoLogoJavascript /> <span>JavaScript</span></p>
                    <p><SiMongodb /> <span>MongoDB</span></p>
                    <p><SiExpress /> <span>Express.js</span></p>
                    <p><FaReact /> <span>React</span></p>
                    <p><FaNodeJs /> <span>Node.js</span></p>
                </div>
                <div className={styles.links}>
                    <a href='https://bingo-kncb.onrender.com/'><button>Link</button></a>
                    <a href='https://github.com/Matt-LaRochelle/bingo'><button>Code</button></a>
                </div>
            </div>
            <div className={styles.project_image}>
                <a href='https://bingo-kncb.onrender.com/'><img src={bingo} alt="Bingo" /></a>
            </div>
        </div>
    )
}

export default Bingo