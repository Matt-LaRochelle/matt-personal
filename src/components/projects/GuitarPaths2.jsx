import { FaReact, FaHtml5, FaFigma, FaNodeJs } from 'react-icons/fa';
import {IoLogoJavascript, IoLogoCss3} from 'react-icons/io';
import {SiMongodb, SiExpress, SiJavascript} from 'react-icons/si';
import { TbBrandVscode } from 'react-icons/tb'
import { BsGit } from 'react-icons/bs'
import { AiFillGithub } from 'react-icons/ai'
import gp2 from '../images/gp2.0.png'
import './project.css'
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import guitarist from '../images/guitarist.png'
import connections from '../images2/alina-grubnyak-ZiQkhI7417A-unsplash.jpg'
import projects from '../images2/projects.png'
import future from '../images/future2.jpg'
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
                <div className='projectTitle'>
                    <h1>Guitar Paths</h1>
                    <p>A web application designed for guitarists learning ear training </p>
                    <div className="projectButtons">
                        <a href='https://guitar-paths.onrender.com/'><button>Web App</button></a>
                        <a href='https://github.com/Matt-LaRochelle/gp2'><button>GitHub Repo</button></a>
                    </div>
                    <div className="loginCredentials">
                        <h4>Login: <span>testuser@testing.user</span></h4>
                        <h4>Password: <span>ABCabc123!</span></h4>
                    </div>
                    <span onClick={openContent} className="moreContent">{moreContent ? "See less" : "See more"}</span>
                </div>
                {moreContent &&
                    <div>
                    <div className="projectProblem">
                        <div>
                            <h3>The problem</h3>
                            <p>Practicing ear training is a challenging thing for students because you need someone in the room to play random notes for you and to tell you whether you got them right or not. However doing this during a lesson is really not a great use of time, as there are many other practical skills that need to be developed as well. In order to facilitate in learning an instrument, I built this app so that students could learn ear training without the guide of a teacher.</p>
                        </div>
                        <img src={guitarist} />
                    </div>
                    <div className="projectProject">
                        <img src={projects} />
                        <div>
                            <h3>The project</h3>
                            <p>I wanted to build an app which would allow students to practice ear training on their own time, in the comfort of their home, or even from anywhere with an internet connection! I wanted the app to be simple, intuitive, and accessible. I wanted the app to be visually pleasing and at a difficulty that was low.</p>
                        </div>
                    </div>
                    <div className="projectSolutions">
                        <div>
                            <h3>Solutions</h3>
                            <p>I made an authentication to track users high scores, I added nice visual animations for the game numbers, I had only the minimal necessary content on each page for the app to function.</p>
                        </div>
                        <a href='https://guitar-paths.onrender.com/'>
                            <img src={gp2} alt="Guitar Paths" />
                        </a>
                    </div>
                </div>
                }
                <div className="projectTechnologies">
                <div className="techStack">
                        <div className="techFrontend">
                            <ul>
                                <li>
                                    <span className="icon"><FaHtml5 /></span>HTML
                                </li>
                                <li>
                                    <span className="icon"><IoLogoCss3 /></span>CSS
                                </li>
                                <li>
                                    <span className="icon"><SiJavascript /></span>JavaScript
                                </li>
                                <li>
                                    <span className="icon"><FaReact /></span>React
                                </li>
                            </ul>
                            <h3>Frontend</h3>
                        </div>
                        <div className="techBackend">
                            <ul>
                                <li>
                                    <span className="icon"><FaNodeJs /></span>Node
                                </li>
                                <li>
                                    <span className="icon"><SiExpress /></span>Express
                                </li>
                                <li>
                                    <span className="icon"><SiMongodb /></span>MongoDB
                                </li>
                            </ul>
                            <h3>Backend</h3>
                        </div>
                        <div className="techUtilities">
                            <ul>
                                <li>
                                    <span className="icon"><TbBrandVscode /></span>VSCode
                                </li>
                                <li>
                                    <span className='icon'><BsGit /></span>Git
                                </li>
                                <li>
                                    <span className='icon'><AiFillGithub /></span>GitHub
                                </li>
                                <li>
                                    <span className='icon'><FaFigma /></span>Figma
                                </li>
                            </ul>
                            <h3>Utilities</h3>
                        </div>
                    </div>
                    {moreContent
                    ?<div className="techTextContent">
                        <h3>Technologies used:</h3>
                        <p>For this project I used HTML, CSS, JavaScript, and React for the front end of the application. On the backend I used Node, Express, and MongoDB. The project is tracked using Git and GitHub and is hosted on Render.com</p>
                    </div>
                    : <img src={gp2} alt="Guitar Paths" />
                    }
                </div>
                {moreContent &&
                <div> 
                    <div className="projectFuture">
                        <div>
                            <h3>Future vision of the project:</h3>
                            <p>I would like to transition this app to a mobile or tablet application that does not require internet access so that more people can use it more often. I would like to add interval training, as well as chord recognition.</p>
                        </div>
                        <img src={future} />
                    </div>
                    <div className="projectButtons">
                        <a href='https://guitar-paths.onrender.com/'><button>Website</button></a>
                        <a href='https://github.com/Matt-LaRochelle/gp2'><button>GitHub Repo</button></a>
                    </div>
                    <span onClick={openContent} className="moreContent">{moreContent ? "See less" : "See more"}</span>
                </div>
                }
            </div>
            <Footer />
        </div>
    )
}

export default GuitarPaths2