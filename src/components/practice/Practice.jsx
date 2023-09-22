import './practice.css'
import { useState, useEffect } from 'react';

const Practice = () => {
    const [startX, setStartX] = useState(null);
    const [isDragging, setIsDragging] = useState(false);
    const [currentX, setCurrentX] = useState(null);
    const [percentage, setPercentage] = useState(0)


    const handleFingerDown = (event) => {
        // const clientX = event.touches[0].clientX;
        // setStartX(clientX);
        // setIsDragging(true);
        console.log("start")
    };

    const handleFingerMove = (event) => {
        // const clientX = event.touches[0].clientX;
        // if (isDragging) {
        //     const distanceDragged = startX - clientX
        //     setCurrentX(distanceDragged)
        //     const percent = (distanceDragged / 500) * 100
        //     const limitedUpperPercent = Math.min(0, percent + percentage)
        //     const limitedLowerPercent = Math.max(-100, limitedUpperPercent)
        //     setPercentage(limitedLowerPercent)
        // }
        console.log("move")
    };

    const handleFingerUp = () => {
        // setIsDragging(false);
        console.log("end")
    };



        // Handle mouse movements
        useEffect(() => {
            document.addEventListener('touchstart', handleFingerDown)
            document.addEventListener('touchmove', handleFingerMove)
            document.addEventListener('touchend', handleFingerUp)
            
            return () => {
              document.removeEventListener('touchstart', handleFingerDown)
              document.removeEventListener('touchmove', handleFingerMove)
              document.removeEventListener('touchend', handleFingerUp)
            };
        }, []);




    return (
        <div className="practice__container" onTouchStart={handleFingerDown} onTouchMove={handleFingerMove} >
            <h1>Container</h1>
            <p>Start x: {startX}</p>
            <p>Is Dragging: {isDragging}</p>
            <div className="practice__box">

            </div>
        </div>
    )
}

export default Practice