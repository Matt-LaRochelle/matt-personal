import './navbar.css'
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
    const [menu, setMenu] = useState(false)

    const navExperiment = () => {
        setMenu(!menu)
    }

    return (
        <header className='navbarHeader'>
            <section className="navLogo">
                <NavLink to="/"><h1>Matt's Dev Projects</h1></NavLink>
            </section>
            <nav className={menu ? "navMenuContainer active" : "navMenuContainer"}>
                <ul>
                    <li className="navLink">
                    <NavLink to="/">Home</NavLink>
                    </li>
                    <li className="navLink">
                    <NavLink to="/about">About</NavLink>
                    </li>
                    <li className="navLink">
                    <NavLink to="/projects">Portfolio</NavLink>
                    </li>
                    <li className="navLink">
                    <NavLink to="/contact">Contact</NavLink>
                    </li>
                </ul>
            </nav>
            <button
                onClick={navExperiment}
                className={`icon ${menu ? 'aActive' : ''}`}
            >
                <div className={`hamburgerIcon ${menu ? 'eActive' : ''}`}></div>
            </button>
        </header>
    )
}

export default Navbar