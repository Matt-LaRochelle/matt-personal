import React from "react";
import styles from './Projects.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import ImgCarriage from '../images/carriage_pic.png';
import Personal from '../images/personal.png'
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
                navigation={true}
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
                                <li>Learning sliderJS</li>
                                <li>Understanding CSS modules</li>
                                <li>Practice with flexbox</li>
                                <li>Creating Hero sections</li>
                                <li>Creating a custom contact form</li>
                            </ul>
                            <h3>Technologies used:</h3>
                            <p><FaReact /> <IoLogoJavascript /> <FaHtml5 /> <FaCss3 /></p>
                            <div className={styles.links}>
                                <button><a href='https://moonlit-shortbread-27d65b.netlify.app'>Link</a></button>
                                <button><a href='https://github.com/Matt-LaRochelle/carriage'>Code</a></button>
                            </div>
                        </div>
                        <div className={styles.project_image}>
                            <img src={ImgCarriage} alt='horse-carriage website' />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.project}>
                        <h3>Project 2</h3>
                        <p>A website for a horseback riding school</p>
                        <p>Include an image</p>
                        <p>Include a link</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.project}>
                        <div className={styles.project_content}>
                            <h3>Portfolio website</h3>
                            <p>A website built to track my projects and show to potential clients</p>
                            <p><FaReact /> <IoLogoJavascript /> <FaHtml5 /> <FaCss3 /></p>
                            <div className={styles.links}>
                                <button><a href='https://rad-meringue-4511ee.netlify.app/'>Link</a></button>
                                <button><a href='https://github.com/Matt-LaRochelle/matt-personal'>Code</a></button>
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