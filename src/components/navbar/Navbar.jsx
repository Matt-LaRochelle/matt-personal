import './navbar.css'
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import {RxHamburgerMenu} from 'react-icons/rx';
import {AiOutlineClose} from 'react-icons/ai';

const Navbar = () => {

    const [menu, setMenu] = useState(false)

    const openMenu = () => {
        setMenu(true)
    }
    const closeMenu = () => {
        setMenu(false)
    }

    return (
        <header className='navbarHeader'>
            <section className="navLogo">
                <h1>Matt's Dev Projects</h1>
                {/* <button className="menu-button">
                    <div className="menu-icon"></div>
                </button> */}
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
            {!menu ? <RxHamburgerMenu onClick={openMenu} className="menuIcon" /> : <AiOutlineClose className="menuIcon" onClick={closeMenu} /> }
        </header>
    )
}

export default Navbar