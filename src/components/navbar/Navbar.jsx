import './navbar.css'
import { NavLink, useLocation } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
    const [menu, setMenu] = useState(false)
    const location = useLocation();

    const navExperiment = () => {
        setMenu(!menu)
    }

    const linkStyle = {
        textDecoration: "underline",
        textDecorationColor: "white",
        textUnderlineOffset: "5px"
    };
    const inactiveLinkStyle = {};

    return (
        <header className='navbarHeader'>
            <section className="navLogo">
                <NavLink to="/clear"><h1>Matt's Dev Projects</h1></NavLink>
            </section>
            <nav className={menu ? "navMenuContainer active" : "navMenuContainer"}>
                <ul>
                    <li className="navLink">
                    <NavLink to="/" style={location.pathname === "/" ? linkStyle : inactiveLinkStyle }>Home</NavLink>
                    </li>
                    <li className="navLink">
                    <NavLink to="/about" style={location.pathname === "/about" ? linkStyle : inactiveLinkStyle }>About</NavLink>
                    </li>
                    <li className="navLink">
                    <NavLink to="/projects" style={location.pathname === "/projects" ? linkStyle : inactiveLinkStyle }>Portfolio</NavLink>
                    </li>
                    <li className="navLink">
                    <NavLink to="/contact" style={location.pathname === "/contact" ? linkStyle : inactiveLinkStyle }>Contact</NavLink>
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