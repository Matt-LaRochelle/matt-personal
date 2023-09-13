import { FaReact, FaHtml5, FaCss3, FaNodeJs } from 'react-icons/fa';
import {IoLogoJavascript} from 'react-icons/io';
import {SiMongodb, SiExpress} from 'react-icons/si';
import gp2 from '../images/gp22.png'
import './project.css'

const GuitarPaths2 = () => {
    return (
        <div>
            <div>
                <div>
                    <h3>Guitar Paths 2.0</h3>
                    <p>A website designed for guitarists learning ear training </p>
                    <div>
                        <h3>Login: <span>testuser@testing.user</span></h3>
                        <h3>Password: <span>ABCabc123!</span></h3>
                    </div>
                    
                    <h3>Design and Features</h3>
                    <ul>
                        <li>Login authentication blocks access for unregistered users</li>
                        <li>Reset password functionality</li>
                        <li>Sound files chosen at random to build musicianship</li>
                        <li>Clean, single-page design</li>
                        <li>Help menus are expandable and scroll to menu when clicked</li>
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
                <div>
                    <a href='https://guitar-paths.onrender.com/'><button>Link</button></a>
                    <a href='https://github.com/Matt-LaRochelle/gp2'><button>Code</button></a>
                </div>
            </div>
            <div>
                <a href='https://guitar-paths.onrender.com/'><img src={gp2} alt="Guitar Paths" /></a>
            </div>
        </div>
    )
}

export default GuitarPaths2