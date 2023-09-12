import './navbar.css'

const Navbar = () => {
    return (
        <header className="navbar">
            <div className='logo'>
                <h3>Matt's Developer Projects</h3>
            </div>
            <nav>
                <ul>
                    <li>
                        Home
                    </li>
                    <li>
                        About
                    </li>
                    <li>
                        Portfolio
                    </li>
                    <li>
                        Contact
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar