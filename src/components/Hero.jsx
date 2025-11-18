import Spline from '@splinetool/react-spline';
import React from 'react';
import LanguageToggle from './LanguageToggle';
import { useLanguage } from '../context/LanguageContext';
function Hero() {
    const { t } = useLanguage();
    const sectionRef = React.useRef(null);
    const [showSpline, setShowSpline] = React.useState(false);

    React.useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;

        // Si IntersectionObserver n'est pas disponible, on affiche par défaut
        if (typeof IntersectionObserver === 'undefined') {
            setShowSpline(true);
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => setShowSpline(entry.isIntersecting),
            { root: null, rootMargin: '200px', threshold: 0.1 } // précharge avant visibilité complète
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <>
            {/* Navbar fixe */}
            <nav className="navbar">
                <div className="navbar-container">
                    <img src="../assets/logo-1.jpg" alt="" />
                    <ul className="nav-menu">
                        <li><a className="nav-link" href="#hero">{t('nav.home')}</a></li>
                        <li><a className="nav-link" href="#about">{t('nav.about')}</a></li>
                        <li><a className="nav-link" href="#skills">{t('nav.skills')}</a></li>
                        <li><a className="nav-link" href="#experience">{t('nav.experience')}</a></li>
                        <li><a className="nav-link" href="#projects">{t('nav.projects')}</a></li>
                        <li><a className="nav-link" href="#contact">{t('nav.contact')}</a></li>
                        <li><LanguageToggle className="nav-link" /></li>
                    </ul>
                </div>
            </nav>

            {/* Hero Section */}
            <section id="hero" ref={sectionRef}>
                <div className="hero-overlay">
                    {showSpline && (
                        <Spline scene="https://prod.spline.design/JohaxjGYIg8EFMeB/scene.splinecode" />
                    )}
                </div>
                <div className="infos">
                    <h4>{t('hero.greeting')}</h4>
                    <h2 id="name">{t('hero.name')}</h2>
                    <h2 id="job">{t('hero.title')}</h2>
                    <p>{t('hero.description')}</p>
                    <a
                        href="https://drive.google.com/drive/folders/1nzbUHwHUPDZBFItoxeO6HOE8UGDRrfJ3?usp=sharing"
                        className="btn"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {t('hero.cta')}
                    </a>
                </div>
            </section>
        </>
    );
}

export default Hero;