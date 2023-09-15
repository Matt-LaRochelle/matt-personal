import './navbar.css'
import { NavLink } from 'react-router-dom';
// import { useState } from 'react';

const Navbar = () => {

    const handleNav = () => {
        console.log("You clicked me!")
    }
    return (
        <header id="navbar">
            <div className='logo'>
                <h3>Matt's Developer Projects</h3>
            </div>
            <nav>
                <ul>
                    <li>
                    <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                    <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                    <NavLink to="/projects">Portfolio</NavLink>
                    </li>
                    <li id="contact">
                    <NavLink to="/contact">Contact</NavLink>
                    </li>
                </ul>
                <div onClick={handleNav} className="menu">
                    <div className="bar"></div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar