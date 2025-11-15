import { useState } from 'react';
import './styles/Experience.css';

function Experience() {
  const [activeTab, setActiveTab] = useState('experience');

  const experienceData = [
    {
      title: 'Stage - Développeur Full Stack',
      company: 'Aridium',
      period: '2025',
      location: 'Safi, Maroc',
      description: 'Développement d\'une application de gestion de clinique dentaire',
      tasks: [
        'Implémentation de plus de 6 modules (Plan de traitement, Gestion des utilisateurs, Paiement, Statistiques, Notifications)',
        'Mise en place d\'une authentification JWT avec gestion des rôles et permissions',
        'Création d\'interfaces utilisateur réactives avec Angular',
        'Développement d\'API REST avec Spring Boot'
      ],
      tech: ['Angular', 'Spring Boot', 'JWT', 'MySQL']
    }
  ];

  const educationData = [
    {
      degree: 'Diplôme d\'ingénieur d\'État en Informatique',
      institution: 'École Nationale des Sciences Appliquées (ENSA)',
      period: '2021 - Présent',
      location: 'Safi, Maroc',
      specialization: 'Développement logiciel',
      description: 'Formation d\'ingénieur spécialisée en développement web et architecture logicielle'
    },
    {
      degree: 'Baccalauréat en Physique - Section Française',
      institution: 'Lycée Mohamed Belhcen El Ouazzani',
      period: '2019 - 2021',
      location: 'Safi, Maroc',
      description: 'Diplôme du baccalauréat avec mention'
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        
        <div className="experience-header">
          <h2 className="experience-title">Parcours</h2>
          <div className="title-underline"></div>
        </div>

        {/* Tabs */}
        <div className="tabs">
          <button 
            className={`tab ${activeTab === 'experience' ? 'active' : ''}`}
            onClick={() => setActiveTab('experience')}
          >
            Expérience
          </button>
          <button 
            className={`tab ${activeTab === 'education' ? 'active' : ''}`}
            onClick={() => setActiveTab('education')}
          >
            Formation
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
                        <strong>Spécialité :</strong> {edu.specialization}
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