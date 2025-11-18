import { useState, useEffect } from 'react';
import './styles/Experience.css';
import { useLanguage } from '../context/LanguageContext';

function Experience() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('experience');

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

    const section = document.getElementById("experience");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const experienceData = [
    {
      title: t('experience.intern.title'),
      company: t('experience.intern.company'),
      period: t('experience.intern.period'),
      location: t('experience.intern.location'),
      description: t('experience.intern.description'),
      tasks: [
        t('experience.intern.tasks.0'),
        t('experience.intern.tasks.1'),
        t('experience.intern.tasks.2'),
        t('experience.intern.tasks.3')
      ],
      tech: ['Angular', 'Spring Boot', 'JWT', 'MySQL']
    }
  ];

  const educationData = [
    {
      degree: t('experience.engineering.degree'),
      institution: t('experience.engineering.institution'),
      period: t('experience.engineering.period'),
      location: t('experience.engineering.location'),
      specialization: t('experience.engineering.specialization'),
      description: t('experience.engineering.description')
    },
    {
      degree: t('experience.baccalaureate.degree'),
      institution: t('experience.baccalaureate.institution'),
      period: t('experience.baccalaureate.period'),
      location: t('experience.baccalaureate.location'),
      description: t('experience.baccalaureate.description')
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className={`experience-container ${isVisible ? 'visible' : ''}`}>
        
        <div className="experience-header">
          <h2 className="experience-title">{t('experience.title')}</h2>
          <div className="title-underline"></div>
        </div>

        {/* Tabs */}
        <div className="tabs">
          <button 
            className={`tab ${activeTab === 'experience' ? 'active' : ''}`}
            onClick={() => setActiveTab('experience')}
          >
            {t('experience.experienceTab')}
          </button>
          <button 
            className={`tab ${activeTab === 'education' ? 'active' : ''}`}
            onClick={() => setActiveTab('education')}
          >
            {t('experience.educationTab')}
          </button>
        </div>

        {/* Content */}
        <div className="content">
          
          {/* Experience Content */}
          {activeTab === 'experience' && (
            <div className="timeline">
              {experienceData.map((exp, index) => (
                <div key={index} className="timeline-item" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <div className="timeline-header">
                      <div>
                        <h3 className="timeline-title">{exp.title}</h3>
                        <p className="timeline-company">{exp.company}</p>
                      </div>
                      <div className="timeline-meta">
                        <span className="timeline-period">{exp.period}</span>
                        <span className="timeline-location">{exp.location}</span>
                      </div>
                    </div>
                    
                    <p className="timeline-description">{exp.description}</p>
                    
                    {exp.tasks && (
                      <ul className="timeline-tasks">
                        {exp.tasks.map((task, idx) => (
                          <li key={idx}>{task}</li>
                        ))}
                      </ul>
                    )}
                    
                    {exp.tech && (
                      <div className="tech-tags">
                        {exp.tech.map((tech, idx) => (
                          <span key={idx} className="tech-tag">{tech}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Education Content */}
          {activeTab === 'education' && (
            <div className="timeline">
              {educationData.map((edu, index) => (
                <div key={index} className="timeline-item" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <div className="timeline-header">
                      <div>
                        <h3 className="timeline-title">{edu.degree}</h3>
                        <p className="timeline-company">{edu.institution}</p>
                      </div>
                      <div className="timeline-meta">
                        <span className="timeline-period">{edu.period}</span>
                        <span className="timeline-location">{edu.location}</span>
                      </div>
                    </div>
                    
                    {edu.specialization && (
                      <p className="timeline-specialization">
                        <strong>{t('experience.specialityTitle')}</strong> {edu.specialization}
                      </p>
                    )}
                    
                    <p className="timeline-description">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>

      </div>
    </section>
  );
}

export default Experience;