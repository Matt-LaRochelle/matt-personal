// import { FaReact, FaHtml5, FaCss3, FaNodeJs } from 'react-icons/fa';
// import {IoLogoJavascript} from 'react-icons/io';
// import {SiMongodb, SiExpress} from 'react-icons/si';
import bingo from '../images/bingo2.0.png'
import './project.css'
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

const Bingo2 = () => {
    return (
        <div className="projectContainer">
            <Navbar />
            <div className="projectPage">
                <h1>Bingo Cards</h1>
                <p>A website that allows you to make custom bingo cards</p>
                <div className="textContent">
                    <div>
                        <h3>The problem:</h3>
                        <p>I play in a dungeons and dragons group online and we have an ongoing gag about playing bingo on the side, according to various things that happen in game. We wanted to create custom bingo cards but found that the current free technology online was not very good, so I decided to build us a web app.</p>
                        <h3>The project:</h3>
                        <p>Build a simple, intuitive bingo customization and generation app.</p>
                        <h3>Solutions:</h3>
                        <p>I created an authentication process so that users could create as many different collections of cards as they want. Then they can customize the entries and have them randomly generated onto a bingo card. They can generate several bingo cards very quickly, all randomly dispersed. I then made it simple to download those bingo cards for use.</p>
                        <h3>Future vision of the project:</h3>
                        <p>I would like to make the app interactive, and build a capability for players to join a "room" where the bingo app can play in real time and people can mark entries and things can be logged across the different players games. A winner can be anmounced in the end.</p>
                    </div>
                    <div>
                        <h3>Technologies used:</h3>
                        <p>For this project I used HTML, CSS, JavaScript, and React for the front end of the application. On the backend I used Node, Express, and MongoDB. The project is tracked using Git and GitHub and is hosted on Render.com</p>
                        <div className="loginCredentials">
                            <h4>Login: <span>testuser@testing.user</span></h4>
                            <h4>Password: <span>ABCabc123!</span></h4>
                        </div>
                        <div className="projectButtons">
                            <a href='https://bingo-kncb.onrender.com/'><button>Web App</button></a>
                            <a href='https://github.com/Matt-LaRochelle/bingo'><button>GitHub Repo</button></a>
                        </div>
                        <div className="imageLink">
                            <a href='https://bingo-kncb.onrender.com/'><img src={bingo} alt="Guitar Paths" /></a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Bingo2