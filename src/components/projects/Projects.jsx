import React, {useState} from "react";
import styles from './Projects.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";

// Components
import Bingo from './Bingo'
import Windmill from './Windmill'
import GuitarPaths2 from './GuitarPaths2'
import Norman from './Norman'
import GuitarPaths from './GuitarPaths'
import Brandywine from "./Brandywine";
import Portfolio from "./Portfolio";

function Projects() {
    const [allProjects, setAllProjects] = useState(false)

    // Toggle between 3 projects and all projects
    const handleClick = () => {
        if (allProjects === false) {
            setAllProjects(true)
        }
        if (allProjects === true) {
            setAllProjects(false)
        }
    }

    return (
        <div className={styles.portfolio}>
        <h1>Projects</h1>

        {/* Three projects */}
        {!allProjects ? 
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
                    <Windmill />
                </SwiperSlide>
                <SwiperSlide>
                    <GuitarPaths2 />
                </SwiperSlide>
                <SwiperSlide>
                    <Bingo />
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.show}>
                    <h1>Want to see more?</h1>
                    <p>Click here:</p>
                    <button onClick={handleClick}>Show all projects</button>
                    </div>
                </SwiperSlide>
            </Swiper>
            : null}

            {/* All projects */}
            {allProjects ? 
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
                    <Windmill />
                </SwiperSlide>
                <SwiperSlide>
                    <GuitarPaths2 />
                </SwiperSlide>
                <SwiperSlide>
                    <Bingo />
                </SwiperSlide>
                <SwiperSlide>
                    <Norman />
                </SwiperSlide>
                <SwiperSlide>
                    <GuitarPaths />
                </SwiperSlide>
                <SwiperSlide>
                    <Brandywine />
                </SwiperSlide>
                <SwiperSlide>
                    <Portfolio />
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.show}>
                    <h1>Go back to top three projects?</h1>
                    <p>Click here:</p>
                    <button onClick={handleClick}>Show top three projects</button>
                    </div>
                </SwiperSlide>
            </Swiper>
            : null}
            </div>
    );
}

export default Projects;