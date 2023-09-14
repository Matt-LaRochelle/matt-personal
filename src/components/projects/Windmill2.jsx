// import { FaReact, FaHtml5, FaCss3, FaNodeJs } from 'react-icons/fa';
// import {IoLogoJavascript} from 'react-icons/io';
// import {SiMongodb, SiExpress} from 'react-icons/si';
import windmill from '../images/windmill2.0.png'
import './project.css'
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

const Windmill2 = () => {
    return (
        <div className="projectContainer">
            <Navbar />
            <div className="projectPage">
                <h1>Windmill Equestrian</h1>
                <p>A website for a horse back riding school</p>
                <div className="textContent">
                    <div>
                        <h3>The problem:</h3>
                        <p>Shoshana had a decent amount of clients, but needed help growing her business, and thought that redesigning and developing her current website would help.</p>
                        <h3>The project:</h3>
                        <p>Build a simple, intuitive website which would display relevant and interesting information about the school.</p>
                        <h3>Solutions:</h3>
                        <p>I set about creating a website which had information about the teacher, what to expect at lessons, pricing, location, as well as information on the horses, and some motivational quotes featured on it. I kept the colors to a minimum and made sure that the content was easily digestable and organized coherently.</p>
                        <h3>Future vision of the project:</h3>
                        <p>I am currently implementing a backend and an administrators page to keep track of students, teachers, and horses, as well as give clients the ability to book lessons online.</p>
                    </div>
                    <div>
                        <h3>Technologies used:</h3>
                        <p>For this project I used HTML, CSS, JavaScript, and React. The project is tracked using Git and GitHub and is hosted on Netlify.com</p>
                        <div className="projectButtons">
                            <a href='https://windmill-equestrian.com/'><button>Website</button></a>
                            <a href='https://github.com/Matt-LaRochelle/horses'><button>GitHub Repo</button></a>
                        </div>
                        <div className="imageLink">
                            <a href='https://windmill-equestrian.com/'><img src={windmill} alt="Guitar Paths" /></a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Windmill2