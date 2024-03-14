import React, {useState, useEffect} from "react"
import './projects.css'
import { Link } from "react-router-dom"

// Components
import Navbar from "../navbar/Navbar"
import Footer from "../footer/Footer"

import { projectInfo } from "./projectInfo"

function Projects() {
    const [maxWidth, setMaxWidth] = useState(null);
    const [startX, setStartX] = useState(null);
    const [currentX, setCurrentX] = useState(null);
    const [isDragging, setIsDragging] = useState(false);
    const [percentage, setPercentage] = useState(0)
    


    const handleMouseDown = (event) => {
        const clientX = event.touches ? event.touches[0].clientX : event.clientX;
        setStartX(clientX);
        setIsDragging(true);
    };

    const handleMouseMove = (event) => {
        const clientX = event.touches ? event.touches[0].clientX : event.clientX;
        if (isDragging) {
            const distanceDragged = startX - clientX
            setCurrentX(distanceDragged)
            const percent = (distanceDragged / maxWidth) * 100
            const limitedUpperPercent = Math.min(0, percent + percentage)
            const limitedLowerPercent = Math.max(-100, limitedUpperPercent)
            setPercentage(limitedLowerPercent)
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    // Handle mouse movements
    useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
        document.addEventListener('touchmove', handleMouseMove)
        document.addEventListener('touchend', handleMouseUp)
        
        return () => {
          document.removeEventListener('mousemove', handleMouseMove);
          document.removeEventListener('mouseup', handleMouseUp);
          document.removeEventListener('touchmove', handleMouseMove)
          document.removeEventListener('touchend', handleMouseUp)
        };
    }, [isDragging]);

    // Handle the screen width variable
    useEffect(() => {
        const handleResize = () => {
          setMaxWidth(window.innerWidth / 2);
        };
    
        // Initial screen width
        setMaxWidth(window.innerWidth / 2);
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    return (
        <div className="projects" onTouchStart={handleMouseDown} onMouseDown={handleMouseDown}>
            <Navbar />
            <div className="projects__container">

                {/* <h1>Projects</h1> */}
                <div className="projects__helper">
                    <h4>Welcome to my portfolio!</h4>
                    <p>Tap or click and drag right to left to view projects</p>
                </div>
                <div 
                    className="projects__image-track"
                    style={{
                        transform: `translate(${percentage}%, -50%)`,
                        }}
                    >
                    {projectInfo.map((project, index) => {
                        return (
                            <Link to={project.link} key={index}>
                                <div className="projects__card">
                                    <img 
                                        src={project.image} 
                                        alt={project.title} 
                                        draggable="false"
                                        style={{objectPosition: `${percentage + 100}% 50%`}} />
                                    <p className="projects__title">{project.title} {project.type}</p>
                                </div>
                            </Link>
                        )})
                    }
                </div>
                {/* <div className="stateVariables">
                    <p>Start X = {startX}</p>
                    <p>Amount slid = {currentX}</p>
                    <p>Percentage = {percentage}</p>
                    <p>maxWidth = {maxWidth}</p>
                </div> */}
            </div>
            <Footer />
        </div>
    );
}

export default Projects;