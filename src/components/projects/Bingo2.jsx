import { FaReact, FaHtml5, FaFigma, FaNodeJs } from 'react-icons/fa';
import {IoLogoJavascript, IoLogoCss3} from 'react-icons/io';
import {SiMongodb, SiExpress, SiJavascript} from 'react-icons/si';
import { TbBrandVscode } from 'react-icons/tb'
import { BsGit } from 'react-icons/bs'
import { AiFillGithub } from 'react-icons/ai'
import bingo from '../images/bingo2.0.png'
import './project.css'
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import connections from '../images2/alina-grubnyak-ZiQkhI7417A-unsplash.jpg'
import projects from '../images2/projects.png'
import future from '../images2/future.png'
import { useState } from 'react';
import Background from '../background/Background'

const Bingo = () => {
    const [moreContent, setMoreContent] = useState(false);

    const openContent = () => {
        setMoreContent(prevValue => !prevValue);
    }

    return (
        <div className="project__container">
            <Navbar />
            <div className="project__page">
                
                {/* <span onClick={openContent} className="moreContent">{moreContent ? "See less" : "See more"}</span> */}

                <div className='project__grid'>
                    <div className='grid__left'>
                        <div className="cta__container">
                            <div className='cta__title'>
                                <h1>Bingo Cards</h1>
                                <p>A website that allows you to make custom bingo cards</p>
                            </div>
                            <div className="cta__credentials">
                                {/* <p>Want to check it out?</p><p>Use these credentials to try it</p> */}
                                <h4>Login: <span>testuser@testing.user</span></h4>
                                <h4>Password: <span>ABCabc123!</span></h4>
                            </div>
                            <div className="cta__links">
                                <a href='https://bingo-kncb.onrender.com/'><button>Website</button></a>
                                <a href='https://github.com/Matt-LaRochelle/bingo'><button>GitHub Repo</button></a>
                            </div>
                        </div>
                        <h1 className="grid__tech-title">Tech</h1>
                        <div className="tech-stack__container">
                            <div className="tech-stack__frontend">
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
                            <div className="tech-stack__backend">
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
                            <div className="tech-stack__utilities">
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
                    </div>

                    <div className='grid__right'>
                        <img src={bingo} alt="Bingo Cards" />
                    </div>   
                </div>
                

                

{/* 

                {moreContent &&
                    <div>
                    <div className="projectProblem">
                        <div>
                            <h3>The problem</h3>
                            <p>I play in a dungeons and dragons group online and we have an ongoing gag about playing bingo on the side, according to various things that happen in the game. We wanted to create custom bingo cards but found that the current free technology online was not very good, so I decided to build us a web app.</p>
                        </div>
                        <img src={connections} />
                    </div>
                    <div className="projectProject">
                        <img src={projects} />
                        <div>
                            <h3>The project</h3>
                            <p>Build a simple, intuitive bingo customization and generation app.</p>
                        </div>
                    </div>
                    <div className="projectSolutions">
                        <div>
                            <h3>Solutions</h3>
                            <p>I created an authentication process so that users could create as many different collections of cards as they want. Then they can customize the entries and have them randomly generated onto a bingo card. They can generate several bingo cards very quickly, all randomly dispersed. I then made it simple to download those bingo cards for use.</p>
                        </div>
                        <a href='https://bingo-kncb.onrender.com/'>
                            <img src={bingo} alt="Bingo Cards" />
                        </a>
                    </div>
                </div>
                }
                {!moreContent && <h2>Technologies Used</h2>}
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
                    : <img src={bingo} alt="Bingo Cards" />
                    }
                </div>
                {moreContent &&
                <div> 
                    <div className="projectFuture">
                        <div>
                            <h3>Future vision of the project:</h3>
                            <p>In the future I hope to make the app interactive, and allow users to createa  "room" in which they can invite their friends to play a custom bingo game together.</p>
                        </div>
                        <img src={future} />
                    </div>
                    <div className="projectButtons">
                        <a href='https://bingo-kncb.onrender.com/'><button>Website</button></a>
                        <a href='https://github.com/Matt-LaRochelle/bingo'><button>GitHub Repo</button></a>
                    </div>
                    <span onClick={openContent} className="moreContent">{moreContent ? "See less" : "See more"}</span>
                </div>
                }
                
                
 */}



 
            </div>
            <Footer />
        </div>
    )
}

export default Bingo