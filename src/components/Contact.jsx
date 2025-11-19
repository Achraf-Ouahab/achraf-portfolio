import { useState, useEffect } from 'react';
import './styles/Contact.css';
import { useLanguage } from '../context/LanguageContext';
import socialLinks from "../data/socialLinks.jsx";

function Contact() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById("contact");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    try {
      const response = await fetch('https://formspree.io/f/xldzdqlw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className={`contact-container ${isVisible ? 'visible' : ''}`}>

        <div className="contact-header">
          <h2 className="contact-title">{t('contact.title')}</h2>
          <div className="title-underline"></div>
        </div>

        <div className="contact-content">

          {/* Left Side - Info */}
          <div className="contact-info">
            <p className="contact-text">
              {t('contact.description')}
            </p>

            <div className="contact-details">
              <div className="detail-item">
                <span className="detail-label">{t('contact.email')}</span>
                <a href="mailto:achrafdev20@gmail.com" className="detail-value">
                  achrafdev20@gmail.com
                </a>
              </div>

              <div className="detail-item">
                <span className="detail-label">{t('contact.phone')}</span>
                <a href="tel:+212675102609" className="detail-value">
                  +212 6 75 10 26 09
                </a>
              </div>

              <div className="detail-item">
                <span className="detail-label">{t('contact.location')}</span>
                <span className="detail-value">Safi, Maroc</span>
              </div>
            </div>

            <div className="social-links">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                >
                  {item.icon}
                  <span>{item.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="contact-form">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={t('contact.name')}
              className="form-input"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={t('contact.email')}
              className="form-input"
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={t('contact.message')}
              rows="6"
              className="form-textarea"
            ></textarea>

            <button onClick={handleSubmit} className="submit-btn" disabled={loading}>
              {loading ? t('contact.sending') : t('contact.send')}
            </button>

            {status === 'success' && (
              <div className="status-success">
                {t('contact.success')}
              </div>
            )}

            {status === 'error' && (
              <div className="status-error">
                {t('contact.error')}
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;