import styles from './Projects.module.css'
import { FaReact, FaHtml5, FaCss3 } from 'react-icons/fa';
import {IoLogoJavascript} from 'react-icons/io';
import Personal from '../images/personal.png';

const Portfolio = () => {
    return (
        <div className={styles.project}>
            <div className={styles.project_content}>
                <div className={styles.text}>
                    <h3>Portfolio website</h3>
                    <p>A website built to track my projects and to showcase to clients</p>
                    <h3>Design and Features</h3>
                    <ul>
                        <li>Simple hero design</li>
                        <li>Grids grow and shrink according to screen size</li>
                        <li>Buttons change color when hovered over</li>
                        <li>Swiper displays most recent projects</li>
                        <li>Use of box shadows to create depth</li>
                    </ul>
                    <h3>Technologies used:</h3>
                    <p><FaHtml5 /> <span>HTML</span></p>
                    <p><FaCss3 /> <span>CSS</span></p>
                    <p><IoLogoJavascript /> <span>JavaScript</span></p>
                    <p><FaReact /> <span>React</span></p>
                </div>
                <div className={styles.links}>
                    <a href='https://rad-meringue-4511ee.netlify.app/'><button>Link</button></a>
                    <a href='https://github.com/Matt-LaRochelle/matt-personal'><button>Code</button></a>
                </div>
            </div>
            <div className={styles.project_image}>
                <a href='https://rad-meringue-4511ee.netlify.app/'><img src={Personal} alt="my personal website" /></a>
            </div>
        </div>
    )
}

export default Portfolio