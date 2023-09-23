import './navbar.css'
import { NavLink } from 'react-router-dom';
// import { useState } from 'react';

const Navbar = () => {

    const handleNav = () => {
        console.log("You clicked me!")
    }
    return (
        <header id="navbar">
            <section className='navbar__title'>
                <h1>Matt's Dev Projects</h1>
                <button onClick={handleNav} className="menu-button">
                    <div className="menu-icon"></div>
                </button>
            </section>
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
            </nav>
        </header>
    )
}

export default Navbar