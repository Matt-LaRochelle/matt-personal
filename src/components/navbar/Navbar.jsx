import './navbar.css'
import { NavLink } from 'react-router-dom';
// import { useState } from 'react';

const Navbar = () => {

    return (
        <header className="navbar">
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
                    <li>
                    <NavLink to="/contact">Contact</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar