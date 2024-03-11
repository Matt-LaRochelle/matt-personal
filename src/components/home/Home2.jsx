import React from "react";
import { Link } from "react-router-dom";
import './home2.css'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import me from '../images/me.jpg'

function Home() {
    return (
        <div className="home2">
            <Navbar />
            {/* <Background /> */}
            <div className="home__container2">
                <div className="home__element2">
                    <div className="home__text2">
                        <h1>Hello</h1>
                        <h4>My name is Matt</h4>
                        <p>I develop <span>websites</span> and <span>web applications</span></p>
                        <Link to="/contact" ><button>Contact Me</button></Link>
                    </div>
                    <img src={me} alt="Matt La Rochelle" className="headshot2" />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;