import React from "react";
import styles from './Projects.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import Personal from '../images/personal.png';
import Norman from '../images/norman.png';
import GuitarPaths from '../images/guitar.png';
import gp2 from '../images/gp2.png';
import l2 from '../images/l2.png';
import { FaReact, FaHtml5, FaCss3, FaNodeJs } from 'react-icons/fa';
import {IoLogoJavascript} from 'react-icons/io';
import {SiMongodb} from 'react-icons/si';

function Projects() {
    return (
        <div className={styles.portfolio}>
        <h1>Projects</h1>
            <Swiper
            style={{
                    "--swiper-navigation-color": "rgb(136, 229, 252)",
                    "--swiper-pagination-color": "rgb(136, 229, 252)",
                    // "--swiper-navigation-color": "#333",
                    // "--swiper-pagination-color": "#333",
                    
                }}
                spaceBetween={10}
                slidesPerView={1}
                loop={true}
                pagination={{clickable: true}}
                navigation={true}
                modules={[Pagination, Navigation]}
                className={styles.container}
            >
                <SwiperSlide>
                    <div className={styles.project}>
                        <div className={styles.project_content}>
                            <div className={styles.text}>
                                <h3>Norman Espinoza</h3>
                                <p>A website for marketing an opera singer</p>
                                <h3>Design and Features</h3>
                                <ul>
                                    <li>Navbar transitions to hamburger icon on smaller screens</li>
                                    <li>Navbar UI highlights which page user is on</li>
                                    <li>Front page includes a picture stretched fully across page</li>
                                    <li>Upcoming performances are mapped using JavaScript</li>
                                    <li>Grid layouts keep page organized</li>
                                    <li>List alters background style for every other list item</li>
                                </ul>
                                <h3>Technologies used:</h3>
                                <p><FaHtml5 /> <FaCss3 /> <IoLogoJavascript /> <FaReact /></p>
                            </div>
                            <div className={styles.links}>
                                <a href='https://stellular-cheesecake-af5f51.netlify.app'><button>Link</button></a>
                                <a href='https://github.com/Matt-LaRochelle/norman-sings'><button>Code</button></a>
                            </div>
                        </div>
                        <div className={styles.project_image}>
                            <a href='https://stellular-cheesecake-af5f51.netlify.app'><img src={Norman} alt="Norman's website" /></a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
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
                                <p><FaHtml5 /> <FaCss3 /> <IoLogoJavascript /> <FaReact /></p>
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
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.project}>
                        <div className={styles.project_content}>
                            <div className={styles.text}>
                                <h3>Guitar Paths 2.0</h3>
                                <p>A website designed for guitarists learning ear training </p>
                                <h3>Design and Features</h3>
                                <ul>
                                    <li>Login authentication blocks access for unregistered users</li>
                                    <li>Reset password functionality</li>
                                    <li>Sound files chosen at random to build musicianship</li>
                                    <li>Clean, single-page design</li>
                                    <li>Help menus are expandable</li>
                                </ul>
                                <h3>Technologies used:</h3>
                                <p><FaHtml5 /> <FaCss3 /> <IoLogoJavascript /> <FaReact /> <FaNodeJs /> <SiMongodb /></p>
                            </div>
                            <div className={styles.links}>
                                <a href='https://guitar-paths.onrender.com/'><button>Link</button></a>
                                <a href='https://github.com/Matt-LaRochelle/gp2'><button>Code</button></a>
                            </div>
                        </div>
                        <div className={styles.project_image}>
                            <a href='https://guitar-paths.onrender.com/'><img src={gp2} alt="Guitar Paths" /></a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
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
                                <p><FaHtml5 /> <FaCss3 /> <IoLogoJavascript /> <FaReact /></p>
                            </div>
                            <div className={styles.links}>
                                <a href='https://papaya-treacle-3a3d03.netlify.app/'><button>Link</button></a>
                                <a href='https://github.com/Matt-LaRochelle/guitar-paths'><button>Code</button></a>
                            </div>
                        </div>
                        <div className={styles.project_image}>
                            <a href='https://papaya-treacle-3a3d03.netlify.app/'><img src={GuitarPaths} alt="Guitar Paths" /></a>
                        </div>
                    </div>
                </SwiperSlide>
                {/* <SwiperSlide>
                    <div className={styles.project}>
                        <div className={styles.project_content}>
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
                            <p><FaHtml5 /> <FaCss3 /> <IoLogoJavascript /> <FaReact /></p>
                            <div className={styles.links}>
                                <a href='https://moonlit-shortbread-27d65b.netlify.app'><button>Link</button></a>
                                <a href='https://github.com/Matt-LaRochelle/carriage'><button>Code</button></a>
                            </div>
                        </div>
                        <div className={styles.project_image}>
                            <a href='https://moonlit-shortbread-27d65b.netlify.app'><img src={ImgCarriage} alt='horse-carriage website' /></a>
                        </div>
                    </div>
                </SwiperSlide> */}
                <SwiperSlide>
                    <div className={styles.project}>
                        <div className={styles.project_content}>
                            <div className={styles.text}>
                                <h3>Portfolio website</h3>
                                <p>A website built to track my projects and to showcase to clients</p>
                                <h3>Design and Features</h3>
                                <ul>
                                    <li>Simple hero design</li>
                                    <li>Grids grow and shrink according to screen size</li>
                                    <li>Buttons change color when hovered over</li>
                                    <li>Swiper displays most recent projects</li>
                                    <li>Use of box shadows to create depth</li>
                                </ul>
                                <h3>Technologies used:</h3>
                                <p><FaHtml5 /> <FaCss3 /> <IoLogoJavascript /> <FaReact /></p>
                            </div>
                            <div className={styles.links}>
                                <a href='https://rad-meringue-4511ee.netlify.app/'><button>Link</button></a>
                                <a href='https://github.com/Matt-LaRochelle/matt-personal'><button>Code</button></a>
                            </div>
                        </div>
                        <div className={styles.project_image}>
                            <a href='https://rad-meringue-4511ee.netlify.app/'><img src={Personal} alt="my personal website" /></a>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            </div>
    );
}

export default Projects;