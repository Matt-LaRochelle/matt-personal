import React, {useState, useEffect} from "react"
import './projects.css'
import { Link } from "react-router-dom"

// Components
import Bingo from '../images/bingo2.0.png'
import Windmill from '../images/windmill2.0.png'
import GuitarPaths2 from '../images/gp2.0.png'
import Navbar from "../navbar/Navbar"
import Footer from "../footer/Footer"

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
        <div className="portfolioContainer" ontouchStart={handleMouseDown} onMouseDown={handleMouseDown}>
            <Navbar />
            <div className="portfolioPage">

                <h1>Projects</h1>
                <div className="scrollbar">
                    <div className="scroll"></div>
                </div>
                <div 
                    className="image-track"
                    style={{
                        transform: `translate(${percentage}%, -50%)`,
                        }}
                    >
                    <Link to="/windmill">
                        <div className="projectCard">
                            <img 
                                src={Windmill} 
                                alt="Windmill Equestrian Website" 
                                draggable="false"
                                style={{objectPosition: `${percentage + 100}% 50%`}} />
                            <p className="projectTitle">Windmill Equestrian Website</p>               
                        </div>
                    </Link>
                    <Link to ="/gp2">
                        <div className="projectCard">
                            <img 
                                src={GuitarPaths2} 
                                alt="Ear Training Web Application" 
                                draggable="false"
                                style={{objectPosition: `${percentage + 100}% 50%`}} />
                            <p className="projectTitle">Ear Training Web App</p>
                        </div>
                    </Link>
                    <Link to="/bingo">
                        <div className="projectCard">
                            <img 
                                src={Bingo} 
                                alt="Bingo Card Generator Web Application" 
                                draggable="false"
                                style={{objectPosition: `${percentage + 100}% 50%`}} />
                            <p className="projectTitle">Custom Bingo Cards Web App</p>
                        </div>
                    </Link>
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

// export default Projects;