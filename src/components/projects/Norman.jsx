import styles from './Projects.module.css'
import { FaReact, FaHtml5, FaCss3 } from 'react-icons/fa';
import {IoLogoJavascript} from 'react-icons/io';
import norman from '../images/norman.png'

const Norman = () => {
    return (
        <div className={styles.project}>
            <div className={styles.project_content}>
                <div className={styles.text}>
                    <h3>Norman Espinoza</h3>
                    <p>A website for marketing an opera singer</p>
                    <h3>Design and Features</h3>
                    <ul>
                        <li>Navbar transitions to hamburger icon on smaller screens</li>
                        <li>Navbar UI highlights which page user is on</li>
                        <li>Front page includes a picture stretched fully across page</li>
                        <li>Upcoming performances are mapped using JavaScript</li>
                        <li>Grid layouts keep page organized</li>
                        <li>List alters background style for every other list item</li>
                    </ul>
                    <h3>Technologies used:</h3>
                    <p><FaHtml5 /> <span>HTML</span></p>
                    <p><FaCss3 /> <span>CSS</span></p>
                    <p><IoLogoJavascript /> <span>JavaScript</span></p>
                    <p><FaReact /> <span>React</span></p>
                </div>
                <div className={styles.links}>
                    <a href='https://stellular-cheesecake-af5f51.netlify.app' target="_blank"><button>Link</button></a>
                    <a href='https://github.com/Matt-LaRochelle/norman-sings' target="_blank"><button>Code</button></a>
                </div>
            </div>
            <div className={styles.project_image}>
                <a href='https://stellular-cheesecake-af5f51.netlify.app'><img src={norman} alt="Norman's website" /></a>
            </div>
        </div>
    )
}

export default Norman