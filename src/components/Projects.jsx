import { useState } from 'react';
import './styles/Projects.css';

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects = [
    {
      id: 1,
      title: 'Atlas Car Repair',
      description: 'Site web de réparation de véhicules avec architecture microservices',
      year: '2025',
      tech: ['Angular', 'Spring Boot', 'Microservices', 'IA'],
      details: 'Développement d\'un site web de réparation de véhicules avec architecture microservices (17 services) et intégration d\'un modèle d\'IA pour la détection des pannes.',
      features: [
        'Architecture microservices (17 services)',
        'Modèle IA pour détection des pannes',
        'Interface utilisateur moderne avec Angular',
        'API REST avec Spring Boot'
      ],
      images: [
        '/assets/project_atlasCar/Client Screen/dropdown_menu.png',
        '/assets/projects/poject_atlasCar/Mockup Screen/Video_ContactUs.png',
        '/assets/projects/poject_atlasCar/Mockup Screen/Video_ContactUs.png'
      ]
    },
    {
      id: 2,
      title: 'Location de Voitures',
      description: 'Système complet de location multi-utilisateurs',
      year: '2025',
      tech: ['React', 'Spring Boot', 'MySQL'],
      details: 'Conception d\'un système complet de location multi-utilisateurs avec modules de gestion, authentification, et prise de rendez-vous.',
      features: [
        'Système multi-utilisateurs (Admin, Client)',
        'Gestion complète des véhicules',
        'Système de réservation en ligne',
        'Authentification sécurisée'
      ],
      images: [
        '/assets/projects/location-1.jpg',
        '/assets/projects/location-2.jpg'
      ]
    },
    {
      id: 3,
      title: 'Gestion Clinique Dentaire',
      description: 'Application de gestion pour cabinets dentaires',
      year: '2025',
      tech: ['Angular', 'Spring Boot', 'JWT', 'MySQL'],
      details: 'Application complète de gestion de clinique dentaire développée chez Aridium.',
      features: [
        'Plan de traitement personnalisé',
        'Gestion des utilisateurs avec JWT',
        'Module de paiement intégré',
        'Statistiques et notifications'
      ],
      images: [
        '/assets/projects/dental-1.jpg',
        '/assets/projects/dental-2.jpg',
        '/assets/projects/dental-3.jpg',
        '/assets/projects/dental-4.jpg'
      ]
    }
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        
        <div className="projects-header">
          <h2 className="projects-title">Projets</h2>
          <div className="title-underline"></div>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="project-image-wrapper">
                <img 
                  src={project.images[0]} 
                  alt={project.title}
                  className="project-image"
                  onError={(e) => {
                    e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%232d3540' width='400' height='300'/%3E%3Ctext fill='%2300adb5' font-family='Arial' font-size='20' x='50%25' y='50%25' text-anchor='middle' dominant-baseline='middle'%3E${project.title}%3C/text%3E%3C/svg%3E`;
                  }}
                />
                <div className="project-overlay">
                  <button onClick={() => openModal(project)} className="view-btn">
                    Voir détails
                  </button>
                </div>
              </div>
              
              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <span className="project-year">{project.year}</span>
                </div>
                
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            
            <div className="modal-body">
              <div className="modal-left">
                <div className="image-slider">
                  <img 
                    src={selectedProject.images[currentImageIndex]} 
                    alt={`${selectedProject.title} - ${currentImageIndex + 1}`}
                    className="modal-image"
                    onError={(e) => {
                      e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="600" height="400"%3E%3Crect fill="%232d3540" width="600" height="400"/%3E%3Ctext fill="%2300adb5" font-family="Arial" font-size="24" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle"%3EImage non disponible%3C/text%3E%3C/svg%3E';
                    }}
                  />
                  
                  {selectedProject.images.length > 1 && (
                    <>
                      <button className="slider-btn prev" onClick={prevImage}>‹</button>
                      <button className="slider-btn next" onClick={nextImage}>›</button>
                      
                      <div className="slider-dots">
                        {selectedProject.images.map((_, idx) => (
                          <span 
                            key={idx} 
                            className={`dot ${idx === currentImageIndex ? 'active' : ''}`}
                            onClick={() => setCurrentImageIndex(idx)}
                          ></span>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
              
              <div className="modal-right">
                <h2 className="modal-title">{selectedProject.title}</h2>
                <span className="modal-year">{selectedProject.year}</span>
                
                <p className="modal-details">{selectedProject.details}</p>
                
                <div className="modal-features">
                  <h4>Fonctionnalités principales :</h4>
                  <ul>
                    {selectedProject.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="modal-tech">
                  <h4>Technologies :</h4>
                  <div className="tech-list">
                    {selectedProject.tech.map((tech, idx) => (
                      <span key={idx} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;