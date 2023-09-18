import React from "react";
import './tech.css'
import {FaReact, FaHtml5, FaCss3, FaBootstrap, FaGithub, FaDocker, FaNodeJs, FaPython} from 'react-icons/fa';
import {IoLogoJavascript} from 'react-icons/io';
import {SiMongodb, SiMysql, SiExpress} from 'react-icons/si';
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

function Tech() {
    return (
            <div className="tech">
            <Navbar />
                <div className="techContainer">
                    <h3>Skills</h3>
                    <div className="stack">
                        <div className="row1">
                            <div className="item">
                                <FaHtml5 />
                                <p>HTML</p>
                            </div>
                            <div className="item">
                                <FaCss3 />
                                <p>CSS</p>
                            </div>
                            <div className="item">
                                <IoLogoJavascript />
                                <p>JavaScript</p>
                            </div>
                            <div className="item">
                                <FaPython />
                                <p>Python</p>
                            </div>
                            <div className="item">
                                <SiMongodb />
                                <p>MongoDB</p>
                            </div>
                            <div className="item">
                                <SiExpress />
                                <p>Express.js</p>
                            </div>
                            <div className="item">
                                <FaNodeJs />
                                <p>Node.js</p>
                            </div>
                            <div className="item">
                                <FaReact />
                                <p>React</p>
                            </div>
                            <div className="item">
                                <SiMysql />
                                <p>MySQL</p>
                            </div>
                            <div className="item">
                                <FaBootstrap />
                                <p>Bootstrap</p>
                            </div>
                            <div className="item">
                                <FaGithub />
                                <p>GitHub</p>
                            </div>
                            <div className="item">
                                <FaDocker />
                                <p>Docker</p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            <Footer />
            </div>
    );
}

export default Tech;