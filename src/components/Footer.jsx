import "./styles/Footer.css";
import { useLanguage } from "../context/LanguageContext";
function Footer(){
    const { t } = useLanguage();
    return (
        <footer className="footer">
            <div className="container-footer">
                <a className="nav-footer" href="#hero">{t('nav.home')}</a>
                <a className="nav-footer" href="#about">{t('nav.about')}</a>
                <a className="nav-footer" href="#skills">{t('nav.skills')}</a>
                <a className="nav-footer" href="#experience">{t('nav.experience')}</a>
                <a className="nav-footer" href="#projects">{t('nav.projects')}</a>
                <a className="nav-footer" href="#contact">{t('nav.contact')}</a>
            </div>
            <p>© {new Date().getFullYear()} <span>OUAHAB Achraf</span>. {t('footer.rights')}</p>
        </footer>
    )
}

export default Footer;