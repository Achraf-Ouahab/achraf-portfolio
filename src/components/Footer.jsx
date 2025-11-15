import "./styles/Footer.css";
function Footer(){
    return (
        <footer className="footer">
            <div className="container">
                <a href="#hero">Home</a>
                <a href="#about">About</a>
                <a href="#projects">My projects</a>
                <a href="#contact">Contact</a>
            </div>
            <p>© {new Date().getFullYear()} <span>OUAHAB Achraf</span>. All rights reserved.</p>
        </footer>
    )
}

export default Footer;