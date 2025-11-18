import { useLanguage } from '../context/LanguageContext';
import './styles/LanguageToggle.css';

function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button className="language-toggle" onClick={toggleLanguage} aria-label="Toggle language">
      <span className={language === 'fr' ? 'active' : ''}>FR</span>
      <span className="separator">/</span>
      <span className={language === 'en' ? 'active' : ''}>EN</span>
    </button>
  );
}

export default LanguageToggle;