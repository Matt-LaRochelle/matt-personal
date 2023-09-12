import React, {useState, useEffect} from "react"
import './projects.css'

// Components
import Bingo from '../images/bingo2.png'
import Windmill from '../images/l2.png'
import GuitarPaths2 from '../images/gp2.0.png'

function Projects() {
    const [startX, setStartX] = useState(null);
    const [currentX, setCurrentX] = useState(null);
    const [relativePosition, setRelativePosition] = useState(null)
    const [isDragging, setIsDragging] = useState(false);
    const [percentage, setPercentage] = useState(0)
    const [maxWidth, setMaxWidth] = useState(null);


    const handleMouseDown = (event) => {
        setStartX(event.clientX);
        setCurrentX(event.clientX);
        setIsDragging(true);
    };

    const handleMouseMove = (event) => {
        if (isDragging) {
            setCurrentX(event.clientX);
            setRelativePosition(startX - currentX)
            const nextPercentage = (event.clientX / maxWidth) * -100
            setPercentage(nextPercentage);
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    // Handle mouse movements
    useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    
        return () => {
          document.removeEventListener('mousemove', handleMouseMove);
          document.removeEventListener('mouseup', handleMouseUp);
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
        <div className="portfolioContainer" onMouseDown={handleMouseDown}>
            <h1>Projects</h1>
            <div 
                className="image-track"
                style={{transform: `translate(${percentage}%, -50%)`}}
                >
                <img src={Windmill} alt="Windmill Equestrian Website" draggable="false" />
                <img src={GuitarPaths2} alt="Ear Training Web Application" draggable="false" />
                <img src={Bingo} alt="Bingo Card Generator Web Application" draggable="false" />
            </div>
            <div className="stateVariables">
                <p>Start X = {startX}</p>
                <p>Current X = {currentX}</p>
                <p>Relative position = {relativePosition}</p>
                <p>Percentage = {percentage}</p>
                <p>maxWidth = {maxWidth}</p> 
            </div>
        </div>
    );
}

export default Projects;