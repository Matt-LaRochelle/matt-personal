import React from "react";
import './home.css'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import Background from "../background/Background";

function Home() {
    return (
        <div className="home">
            <Navbar />
            {/* <Background /> */}
            <div className="home__text">
                <h1>Hello</h1>
                <p>My name is Matt</p>
                <p>I develop <span>websites</span> and <span>web applications</span></p>
            </div>
            <Footer />
        </div>
    );
}

export default Home;