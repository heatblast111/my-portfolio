import '../../styles/navbar.css';

function Navbar() {
    return (
        <header className="navbar-wrapper">

            <nav className="navbar">

                <div className="navbar-logo">
                    {"</>"} ARC
                </div>

                <div className="navbar-links">

                    <a href="#hero">Home</a>

                    <a href="#about">About</a>

                    <a href="#skills">Skills</a>

                    <a href="#projects">Projects</a>

                    <a href="#contact">Contact</a>

                </div>

            </nav>

        </header>
    );
}

export default Navbar;