import { useState } from 'react';
import './styles/Contact.css';

function Contact() {
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
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
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
      <div className="contact-container">
        
        <div className="contact-header">
          <h2 className="contact-title">Contact</h2>
          <div className="title-underline"></div>
        </div>

        <div className="contact-content">
          
          {/* Left Side - Info */}
          <div className="contact-info">
            <p className="contact-text">
              Vous avez un projet en tête ou une question ? 
              N'hésitez pas à me contacter, je serais ravi d'échanger avec vous.
            </p>
            
            <div className="contact-details">
              <div className="detail-item">
                <span className="detail-label">Email</span>
                <a href="mailto:achrafdev20@gmail.com" className="detail-value">
                  achrafdev20@gmail.com
                </a>
              </div>
              
              <div className="detail-item">
                <span className="detail-label">Téléphone</span>
                <a href="tel:+212675102609" className="detail-value">
                  +212 6 75 10 26 09
                </a>
              </div>
              
              <div className="detail-item">
                <span className="detail-label">Localisation</span>
                <span className="detail-value">Safi, Maroc</span>
              </div>
            </div>

            <div className="social-links">
              <a href="https://linkedin.com/in/achraf-ouahab-88019223b" target="_blank" rel="noopener noreferrer" className="social-btn">
                LinkedIn
              </a>
              <a href="https://github.com/Achraf-Ouahab" target="_blank" rel="noopener noreferrer" className="social-btn">
                GitHub
              </a>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="contact-form">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Votre nom"
              className="form-input"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Votre email"
              className="form-input"
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Votre message"
              rows="6"
              className="form-textarea"
            ></textarea>

            <button onClick={handleSubmit} className="submit-btn" disabled={loading}>
              {loading ? 'Envoi...' : 'Envoyer'}
            </button>

            {status === 'success' && (
              <div className="status-success">
                Message envoyé avec succès !
              </div>
            )}

            {status === 'error' && (
              <div className="status-error">
                Erreur lors de l'envoi. Réessayez.
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;