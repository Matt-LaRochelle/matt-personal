import { FaReact, FaHtml5, FaFigma, FaNodeJs } from 'react-icons/fa';
import { IoLogoCss3} from 'react-icons/io';
import { SiMongodb, SiExpress, SiJavascript } from 'react-icons/si';
import { TbBrandVscode } from 'react-icons/tb'
import { BsGit } from 'react-icons/bs'
import { AiFillGithub } from 'react-icons/ai'

import opera from '../images/opera-cultura.png'
import './project.css'
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
// import { useState } from 'react';

const Opera = () => {
    // const [moreContent, setMoreContent] = useState(false);

    // const openContent = () => {
    //     setMoreContent(prevValue => !prevValue);
    // }

    return (
        <div className="project__container">
            <Navbar />
            <div className="project__page">
                
                {/* <span onClick={openContent} className="more__content">{moreContent ? "More Details" : "Less Details"}</span> */}

                <div className='project__grid'>
                    <div className="grid__left">
                        <div className="cta__container">
                            <div className='cta__title'>
                                <h1>Ópera Cultura</h1>
                                <p>A website for a latino/x/a/é opera company and community school</p>
                            </div>
                            <div className="cta__credentials">
                                {/* <p>Want to check it out?</p> */}
                            </div>
                            <div className="cta__links">
                                <a href='https://operacultura.org/' target="_blank"><button>Website</button></a>
                                <p>Code is private</p>
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
                        <img src={opera} alt="Ópera Cultura" />
                    </div>
                </div>

                
                    
                



{/* 




                {moreContent &&
                    <div>
                    <div className="projectProblem">
                        <div>
                            <h3>The problem</h3>
                            <p>Shoshana had a decent amount of clients, but needed help growing her business, and thought that redesigning and developing her current website would help.</p>
                        </div>
                        <img src={connections} />
                    </div>
                    <div className="projectProject">
                        <img src={projects} />
                        <div>
                            <h3>The project</h3>
                            <p>Build a simple, intuitive website which would display relevant and interesting information about the school.</p>
                        </div>
                    </div>
                    <div className="projectSolutions">
                        <div>
                            <h3>Solutions</h3>
                            <p>I set about creating a website which had information about the teacher, what to expect at lessons, pricing, location, as well as information on the horses, and some motivational quotes featured on it. I kept the colors to a minimum and made sure that the content was easily digestable and organized coherently.</p>
                        </div>
                        <a href='https://windmill-equestrian.com/'>
                            <img src={windmill} alt="Windmill Equestrian" />
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
                    ?   <div className="techTextContent">
                            <h3>Technologies used:</h3>
                            <p>For this project I used HTML, CSS, JavaScript, and React. The project is tracked using Git and GitHub and is hosted on Netlify.com</p>
                        </div>
                    :   <img src={windmill} alt="Guitar Paths" />
                    }
                    
                </div>
                {moreContent &&
                <div> 
                    <div className="projectFuture">
                        <div>
                            <h3>Future vision of the project:</h3>
                            <p>I am currently implementing a backend and an administrator page to keep track of students, teachers, and horses, as well as give clients the ability to book lessons online.</p>
                        </div>
                        <img src={future} />
                    </div>
                    <div className="projectButtons">
                        <a href='https://windmill-equestrian.com/'><button>Website</button></a>
                        <a href='https://github.com/Matt-LaRochelle/horses'><button>GitHub Repo</button></a>
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

export default Opera