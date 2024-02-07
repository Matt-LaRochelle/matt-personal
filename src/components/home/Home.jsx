import React from "react";
import { Link } from "react-router-dom";
import './home.css'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import Background from "../background/Background";
import me from '../images/me.jpg'

function Home() {
    return (
        <div className="home">
            <Navbar />
            {/* <Background /> */}
            <div className="home__container">
                <div className="home__element">
                    <div className="home__text">
                        <h1>Hello</h1>
                        <h4>My name is Matt</h4>
                        <p>I develop <span>websites</span> and <span>web applications</span></p>
                        <Link to="/contact" ><button>Contact Me</button></Link>
                    </div>
                    <img src={me} alt="Matt La Rochelle" className="headshot" />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;