

function Hero() {
    return (
        <>
            {/* Navbar fixe */}
            <nav className="navbar">
                <div className="navbar-container">
                    {/* <div className="logo">
                    </div> */}
                    <img src="../assets/logo-1.jpg" alt="" />
                    <ul className="nav-menu">
                        <li><a className="nav-link" href="#hero">Home</a></li>
                        <li><a className="nav-link" href="#about">About</a></li>
                        <li><a className="nav-link" href="#skills">Skills</a></li>
                        <li><a className="nav-link" href="#projects">Projects</a></li>
                        <li><a className="nav-link" href="#contact">Contact</a></li>
                    </ul>
                </div>
            </nav>

            {/* Hero Section */}
            <section id="hero">
                <div className="hero-overlay"></div>
                <div className="infos">
                    <h4>Hello I'm</h4>
                    <h2 id="name">OUAHAB Achraf</h2>
                    <h2 id="job">Web Developer</h2>
                    <p>Welcome to my portfolio! I'm Achraf, a passionate Full Stack Developer dedicated to crafting seamless web experiences. Explore my projects and skills below.</p>
                    <a href="#contact" className="btn">Hire me</a>
                </div>
            </section>
        </>
    );
}

export default Hero;