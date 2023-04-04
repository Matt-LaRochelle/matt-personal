import React from "react";
import styles from './Projects.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import ImgCarriage from '../images/carriage_pic.png';
import Personal from '../images/personal.png';
import Norman from '../images/Norman.png';
import { FaReact, FaHtml5, FaCss3 } from 'react-icons/fa';
import {IoLogoJavascript} from 'react-icons/io';

function Projects() {
    return (
        <div className={styles.portfolio}>
        <h1>Projects</h1>
            <Swiper
                spaceBetween={10}
                slidesPerView={1}
                loop={true}
                pagination={{clickable: true}}
                modules={[Pagination, Navigation]}
                className={styles.container}
            >
                <SwiperSlide>
                    <div className={styles.project}>
                        <div className={styles.project_content}>
                            <h3>Brandywine Carriage Tours</h3>
                            <p>A website I built for a horse drawn carriage service</p>
                            <h3>Challenges faced:</h3>
                            <ul>
                                <li>Learning swiperJS</li>
                                <li>Understanding CSS modules</li>
                                <li>Practice with flexbox</li>
                                <li>Creating Hero sections</li>
                                <li>Creating a custom contact form</li>
                            </ul>
                            <h3>Technologies used:</h3>
                            <p><FaHtml5 /> <FaCss3 /> <IoLogoJavascript /> <FaReact /></p>
                            <div className={styles.links}>
                                <a href='https://moonlit-shortbread-27d65b.netlify.app'><button>Link</button></a>
                                <a href='https://github.com/Matt-LaRochelle/carriage'><button>Code</button></a>
                            </div>
                        </div>
                        <div className={styles.project_image}>
                            <img src={ImgCarriage} alt='horse-carriage website' />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.project}>
                        <div className={styles.project_content}>
                            <h3>Norman Espinoza</h3>
                            <p>A website for marketing as an opera singer</p>
                            <h3>Challenges faced</h3>
                            <ul>
                                <li>Getting an image to fill a full page</li>
                                <li>Practice with CSS grid</li>
                                <li>Mapping data</li>
                                <li>Creating a simple but professional design</li>
                                <li>Working with altering lists by every other entry</li>
                            </ul>
                            <h3>Technologies used:</h3>
                            <p><FaHtml5 /> <FaCss3 /> <IoLogoJavascript /> <FaReact /></p>
                            <div className={styles.links}>
                                <a href='https://stellular-cheesecake-af5f51.netlify.app'><button>Link</button></a>
                                <a href='https://github.com/Matt-LaRochelle/norman-sings'><button>Code</button></a>
                            </div>
                        </div>
                        <div className={styles.project_image}>
                            <img src={Norman} alt="my personal website" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.project}>
                        <div className={styles.project_content}>
                            <h3>Portfolio website</h3>
                            <p>A website built to track my projects and show to clients</p>
                            <h3>Challenges faced</h3>
                            <ul>
                                <li>Darkening an image to lay text on top</li>
                                <li>Practice with CSS grid</li>
                                <li>Absolute and relative positioning</li>
                                <li>Using borders to debug CSS styling</li>
                                <li>Creating responsive layouts</li>
                            </ul>
                            <h3>Technologies used:</h3>
                            <p><FaHtml5 /> <FaCss3 /> <IoLogoJavascript /> <FaReact /></p>
                            <div className={styles.links}>
                                <a href='https://rad-meringue-4511ee.netlify.app/'><button>Link</button></a>
                                <a href='https://github.com/Matt-LaRochelle/matt-personal'><button>Code</button></a>
                            </div>
                        </div>
                        <div className={styles.project_image}>
                            <img src={Personal} alt="my personal website" />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            </div>
    );
}

export default Projects;