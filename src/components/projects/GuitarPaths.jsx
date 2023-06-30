import styles from './Projects.module.css'
import { FaReact, FaHtml5, FaCss3 } from 'react-icons/fa';
import {IoLogoJavascript} from 'react-icons/io';
import gp from '../images/guitar.png';

const GuitarPaths = () => {
    return (
        <div className={styles.project}>
            <div className={styles.project_content}>
                <div className={styles.text}>
                    <h3>Guitar Paths</h3>
                    <p>A website designed for guitarists learning ear training </p>
                    <h3>Design and Features</h3>
                    <ul>
                        <li>Clear UX for different sections</li>
                        <li>Games designed for unlimited practice</li>
                        <li>Sound files chosen at random to build musicianship</li>
                        <li>Diagrams expand for more information</li>
                        <li>Help menus fade in and out</li>
                    </ul>
                    <h3>Technologies used:</h3>
                    <p><FaHtml5 /> <span>HTML</span></p>
                    <p><FaCss3 /> <span>CSS</span></p>
                    <p><IoLogoJavascript /> <span>JavaScript</span></p>
                    <p><FaReact /> <span>React</span></p>
                </div>
                <div className={styles.links}>
                    <a href='https://papaya-treacle-3a3d03.netlify.app/'><button>Link</button></a>
                    <a href='https://github.com/Matt-LaRochelle/guitar-paths'><button>Code</button></a>
                </div>
            </div>
            <div className={styles.project_image}>
                <a href='https://papaya-treacle-3a3d03.netlify.app/'><img src={gp} alt="Guitar Paths" /></a>
            </div>
        </div>
    )
}

export default GuitarPaths