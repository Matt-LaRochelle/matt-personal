import styles from './Projects.module.css'
import { FaReact, FaHtml5, FaCss3 } from 'react-icons/fa';
import {IoLogoJavascript} from 'react-icons/io';
import ImgCarriage from '../images/carriage_pic.png';

const Brandywine = () => {
    return (
        <div className={styles.project}>
            <div className={styles.project_content}>
                <div className={styles.text}>
                    <h3>Brandywine Carriage Tours</h3>
                    <p>A marketing website for a horse drawn carriage service</p>
                    <h3>Design and Features</h3>
                    <ul>
                        <li>Swiper function for gallery of pictures</li>
                        <li>CSS modules used for common classes across pages</li>
                        <li>Hero sections with dynamic background image</li>
                        <li>Color gradients for backgrounds</li>
                        <li>Custom contact form</li>
                    </ul>
                    <h3>Technologies used:</h3>
                    <p><FaHtml5 /> <span>HTML</span></p>
                    <p><FaCss3 /> <span>CSS</span></p>
                    <p><IoLogoJavascript /> <span>JavaScript</span></p>
                    <p><FaReact /> <span>React</span></p>
                </div>
                <div className={styles.links}>
                    <a href='https://moonlit-shortbread-27d65b.netlify.app'><button>Link</button></a>
                    <a href='https://github.com/Matt-LaRochelle/carriage'><button>Code</button></a>
                </div>
            </div>
            <div className={styles.project_image}>
                <a href='https://moonlit-shortbread-27d65b.netlify.app'><img src={ImgCarriage} alt='horse-carriage website' /></a>
            </div>
        </div>
    )
}

export default Brandywine