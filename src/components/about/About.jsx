import React from "react";
import './about.css'

// icons
import {FaReact, FaRegFilePowerpoint, FaHtml5, FaCss3, FaBootstrap, FaFigma, FaGithub, FaDocker, FaNodeJs, FaPython} from 'react-icons/fa';
import {SiMongodb, SiJavascript, SiC, SiMysql, SiExpress, SiFlask, SiPycharm} from 'react-icons/si';
import {BsGit} from 'react-icons/bs'
import {AiOutlineFileExcel} from 'react-icons/ai'
import {TbBrandVscode, TbBrandDjango} from 'react-icons/tb'

import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

import arizona from '../images/arizona.png'
import sjsu from '../images/sjsu.png'
import chatgpt from '../images/chatGPT.png'


function About() {
    return (
            <div className="about">
            <Navbar />
                <div className="about__container">
                    <h3>About</h3>
                    <p>I am a full stack developer based in San Jose, California. I have a passion for frontend development and I build websites and web applications using the <span>MERN</span> stack.</p>
                    <div className="about__tech-stack">
                        <div className="tech-stack__current">
                            <h4>Current</h4>
                            <div className="item"><FaHtml5 /><p>HTML</p></div>
                            <div className="item"><FaCss3 /><p>CSS</p></div>
                            <div className="item"><SiJavascript /><p>JavaScript</p></div>
                            <div className="item"><FaReact /><p>React</p></div>
                            <div className="item"><SiMongodb /><p>MongoDB</p></div>
                            <div className="item"><SiExpress /><p>Express.js</p></div>
                            <div className="item"><FaNodeJs /><p>Node.js</p></div>
                            <div className="item"><FaFigma /><p>Figma</p></div>
                            <div className="item"><BsGit /><p>Git</p></div>
                            <div className="item"><FaGithub /><p>GitHub</p></div>      
                            <div className="item"><TbBrandVscode /><p>VSCode</p></div>    
                            <div className="item"><img src={chatgpt} alt="chatgpt" /><p>Chat GPT</p></div>  
                        </div>
                        <div className="tech-stack__past">
                            <h4>Past</h4>
                            <div className="item"><FaPython /><p>Python</p></div>
                            <div className="item"><TbBrandDjango /><p>Django</p></div>
                            <div className="item"><SiFlask /><p>Flask</p></div>
                            <div className="item"><SiMysql /><p>MySQL</p></div>
                            <div className="item"><FaBootstrap /><p>Bootstrap</p></div>  
                            <div className="item"><SiC /><p>C</p></div>      
                            <div className="item"><SiPycharm /><p>PyCharm</p></div>            
                            <div className="item"><FaDocker /><p>Docker</p></div>    
                            <div className="item"><FaRegFilePowerpoint /><p>Microsoft Powerpoint</p></div>        
                            <div className="item"><AiOutlineFileExcel /><p>Microsoft Excel</p></div>    
                        </div>
                    </div>
                    <div className="about__education">
                        <h3>Education</h3>
                        <div className="education__container">
                            <div className="education__school">
                                <img src={arizona} alt="University of Arizona" />
                                <div>
                                    <h4>University of Arizona</h4>
                                    <p>Master of Music</p>
                                    <p>3.6 GPA - Graduated 2016</p>
                                </div>
                            </div>
                            <div className="education__school">
                                <img src={sjsu} alt="San Jose State University" />
                                <div>
                                    <h4>San Jose State University</h4>
                                    <p>Bacherlor of Music</p>
                                    <p>3.8 GPA - Graduated 2014</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <Footer />
            </div>
    );
}

export default About;