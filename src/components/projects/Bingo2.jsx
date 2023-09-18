// import { FaReact, FaHtml5, FaCss3, FaNodeJs } from 'react-icons/fa';
// import {IoLogoJavascript} from 'react-icons/io';
// import {SiMongodb, SiExpress} from 'react-icons/si';
import bingo from '../images/bingo2.0.png'
import './project.css'
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import connections from '../images2/alina-grubnyak-ZiQkhI7417A-unsplash.jpg'
import projects from '../images2/projects.png'
import techstack from '../images2/techstack.png'
import future from '../images2/future.png'
import { useState } from 'react';

const Bingo = () => {
    const [moreContent, setMoreContent] = useState(false);

    const openContent = () => {
        setMoreContent(prevValue => !prevValue);
    }

    return (
        <div className="projectContainer">
            <Navbar />
            <div className="projectPage">
                <div className='projectTitle'>
                    <h1>Bingo Cards</h1>
                    <p>A website that allows you to make custom bingo cards</p>
                    <span onClick={openContent} className="moreContent">{moreContent ? "See less" : "See more"}</span>
                    <div className="loginCredentials">
                        <h4>Login: <span>testuser@testing.user</span></h4>
                        <h4>Password: <span>ABCabc123!</span></h4>
                    </div>
                    <div className="projectButtons">
                        <a href='https://bingo-kncb.onrender.com/'><button>Website</button></a>
                        <a href='https://github.com/Matt-LaRochelle/bingo'><button>GitHub Repo</button></a>
                    </div>
                </div>
                {moreContent &&
                    <div>
                    <div className="projectProblem">
                        <div>
                            <h3>The problem</h3>
                            <p>I play in a dungeons and dragons group online and we have an ongoing gag about playing bingo on the side, according to various things that happen in game. We wanted to create custom bingo cards but found that the current free technology online was not very good, so I decided to build us a web app.</p>
                        </div>
                        <img src={connections} />
                    </div>
                    <div className="projectProject">
                        <img src={projects} />
                        <div>
                            <h3>The project</h3>
                            <p>Build a simple, intuitive bingo customization and generation app.</p>
                        </div>
                    </div>
                    <div className="projectSolutions">
                        <div>
                            <h3>Solutions</h3>
                            <p>I created an authentication process so that users could create as many different collections of cards as they want. Then they can customize the entries and have them randomly generated onto a bingo card. They can generate several bingo cards very quickly, all randomly dispersed. I then made it simple to download those bingo cards for use.</p>
                        </div>
                        <a href='https://bingo-kncb.onrender.com/'>
                            <img src={bingo} alt="Guitar Paths" />
                        </a>
                    </div>
                </div>
                }
                <div className="projectTechnologies">
                    <img src={techstack} />
                    <div>
                        <h3>Technologies used:</h3>
                        <p>For this project I used HTML, CSS, JavaScript, and React for the front end of the application. On the backend I used Node, Express, and MongoDB. The project is tracked using Git and GitHub and is hosted on Render.com</p>
                    </div>
                </div>
                {moreContent &&
                <div> 
                    <div className="projectFuture">
                        <div>
                            <h3>Future vision of the project:</h3>
                            <p>I am currently implementing a backend and an administrators page to keep track of students, teachers, and horses, as well as give clients the ability to book lessons online.</p>
                        </div>
                        <img src={future} />
                    </div>
                    <span onClick={openContent} className="moreContent">{moreContent ? "See less" : "See more"}</span>
                    <div className="projectButtons">
                        <a href='https://bingo-kncb.onrender.com/'><button>Website</button></a>
                        <a href='https://github.com/Matt-LaRochelle/bingo'><button>GitHub Repo</button></a>
                    </div>
                </div>
                }
            </div>
            <Footer />
        </div>
    )
}

export default Bingo