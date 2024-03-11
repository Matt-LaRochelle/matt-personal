import './background2.css'
import { IoHappyOutline } from "react-icons/io5";

const background2 = () => {

    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

document.addEventListener('DOMContentLoaded', () => {
    const interBubble = document.querySelector('.interactive');

    function move() {
        curX += (tgX - curX) / 20;
        curY += (tgY - curY) / 20;
        interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
        requestAnimationFrame(() => {
            move();
        })
    }

    window.addEventListener('mousemove', (e) => {
        tgX = e.clientX;
        tgY = e.clientY;
    });

    move();
});

    return (
        <div className="background2">
            <div className="gradient-bg">
                <svg xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <filter id="goo">
                            <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" />
                            <feColorMatrix in="blur" mode="matrix" values="
                                1 0 0 0 0
                                0 1 0 0 0
                                0 0 1 0 0
                                0 0 0 38 -8" result="goo" />
                            <feBlend in="SourceGraphic" in2="goo" /> 
                        </filter>
                    </defs>
                </svg>
                <div className="gradients-container">
                    <div className="g1"><IoHappyOutline /></div>
                    <div className="g2"><IoHappyOutline /></div>
                    <div className="g3"><IoHappyOutline /></div>
                    <div className="g4"><IoHappyOutline /></div>
                    <div className="g5"><IoHappyOutline /></div>
                    <div className="interactive"><IoHappyOutline /></div>
                </div>
            </div>
        </div>
    )
}

export default background2