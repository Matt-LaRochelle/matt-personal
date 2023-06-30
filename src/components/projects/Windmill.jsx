import styles from './Projects.module.css'
import { FaReact, FaHtml5, FaCss3 } from 'react-icons/fa';
import {IoLogoJavascript} from 'react-icons/io';
import l2 from '../images/l2.png'

const Windmill = () => {
    return (
        <div className={styles.project}>
            <div className={styles.project_content}>
                <div className={styles.text}>
                    <h3>Windmill Equestrian</h3>
                    <p>A website for a horse back riding school</p>
                    <h3>Design and Features</h3>
                    <ul>
                        <li>Line length limited to 75 characters</li>
                        <li>CSS written efficiently for dynamic viewport size</li>
                        <li>Professional design in black and white</li>
                        <li>Functional contact form</li>
                        <li>Grids update on smaller screens</li>
                    </ul>
                    <h3>Technologies used:</h3>
                    <p><FaHtml5 /> <span>HTML</span></p>
                    <p><FaCss3 /> <span>CSS</span></p>
                    <p><IoLogoJavascript /> <span>JavaScript</span></p>
                    <p><FaReact /> <span>React</span></p>
                </div>
                <div className={styles.links}>
                    <a href='https://windmill-equestrian.com/'><button>Link</button></a>
                    <a href='https://github.com/Matt-LaRochelle/horses'><button>Code</button></a>
                </div>
            </div>
            <div className={styles.project_image}>
                <a href='https://windmill-equestrian.com/'><img src={l2} alt="Windmill Equestrian web logo" /></a>
            </div>
        </div>
    )
}

export default Windmill