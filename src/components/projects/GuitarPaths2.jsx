// import { FaReact, FaHtml5, FaCss3, FaNodeJs } from 'react-icons/fa';
// import {IoLogoJavascript} from 'react-icons/io';
// import {SiMongodb, SiExpress} from 'react-icons/si';
import gp2 from '../images/gp2.0.png'
import './project.css'
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import { useState } from 'react';

const GuitarPaths2 = () => {
    const [moreContent, setMoreContent] = useState(false);

    const openContent = () => {
        setMoreContent(prevValue => !prevValue);
    }
    return (
        <div className="projectContainer">
            <Navbar />
            <div className="projectPage">
                <h1>Guitar Paths 2.0</h1>
                <p>A web application designed for guitarists learning ear training </p>
                <div className="textContent">
                    {moreContent &&   
                        <div>
                            <h3>The problem:</h3>
                            <p>Practicing ear training is a challenging thing for students because you need someone in the room to play random notes for you and to tell you whether you got them right or not. However doing this during a lesson is really not a great use of time, as there are many other practical skills that need to be developed as well. In order to facilitate in learning an instrument, I built this app so that students could learn ear training without the guide of a teacher.</p>
                            <h3>The project:</h3>
                            <p>I wanted to build an app which would allow students to practice ear training on their own time, in the comfort of their home, or even from anywhere with an internet connection! I wanted the app to be simple, intuitive, and accessible. I wanted the app to be visually pleasing and at a difficulty that was low.</p>
                            <h3>Solutions:</h3>
                            <p>I made an authentication to track users high scores, I added nice visual animations for the game numbers, I had only the minimal necessary content on each page for the app to function.</p>
                            <h3>Future vision of the project:</h3>
                            <p>I would like to transition this app to a mobile or tablet application that does not require internet access so that more people can use it more often. I would like to add interval training, as well as chord recognition.</p>
                        </div>
                     }
                    <div>
                        <div className="technologies">
                            <h3>Technologies used:</h3>
                            {moreContent 
                                ? <p>For this project I used HTML, CSS, JavaScript, and React for the front end of the application. On the backend I used Node, Express, and MongoDB. The project is tracked using Git and GitHub and is hosted on Render.com</p>
                                : <p>HTML, CSS, JavaScript, React, MongoDB, Node, Express</p>
                            }
                        </div>
                        
                        <div className="loginCredentials">
                            <h4>Login: <span>testuser@testing.user</span></h4>
                            <h4>Password: <span>ABCabc123!</span></h4>
                        </div>
                        <span onClick={openContent} className="moreContent">{moreContent ? "See less" : "See more"}</span>
                        <div className="projectButtons">
                            <a href='https://guitar-paths.onrender.com/'><button>Web App</button></a>
                            <a href='https://github.com/Matt-LaRochelle/gp2'><button>GitHub Repo</button></a>
                        </div>
                        <div className="imageLink">
                            <a href='https://guitar-paths.onrender.com/'><img src={gp2} alt="Guitar Paths" /></a>
                        </div>
                    </div>
                </div>
                

                        
                        {/* <h3>Design and Features</h3>
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
                        <p><FaNodeJs /> <span>Node.js</span></p> */}

            
            </div>
            <Footer />
        </div>
    )
}

export default GuitarPaths2