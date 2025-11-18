import { useState, useEffect } from 'react';
import './styles/Projects.css';
import { useLanguage } from '../context/LanguageContext';

function Projects() {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
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
  
      const section = document.getElementById("projects");
      if (section) observer.observe(section);
  
      return () => observer.disconnect();
    }, []);

  const projects = [
    {
      id: 1,
      title: t('projects.atlasCar.title'),
      description: t('projects.atlasCar.description'),
      year: '2025',
      tech: ['Angular', 'Spring Boot', 'Microservices', 'IA'],
      details: t('projects.atlasCar.details'),
      features: [
        t('projects.atlasCar.features.0'),
        t('projects.atlasCar.features.1'),
        t('projects.atlasCar.features.2'),
        t('projects.atlasCar.features.3')
      ],
      images: [
        '/assets/project_atlasCar/Video_ContactUs.png',
        '/assets/project_atlasCar/Magazin_Services.png',
        '/assets/project_atlasCar/IA_DetailsEqruipements.png',
        '/assets/project_atlasCar/GEquipement_GService.png'
      ]
    },
    {
      id: 2,
      title: t('projects.safiTech.title'),
      description: t('projects.safiTech.description'),
      year: '2024',
      tech: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript', 'HTML', 'CSS'],
      details: t('projects.safiTech.details'),
      features: [
        t('projects.safiTech.features.0'),
        t('projects.safiTech.features.1'),
        t('projects.safiTech.features.2'),
        t('projects.safiTech.features.3')
      ],
      images: [

        '/assets/project_safiTech/safitech1.png',
        '/assets/project_safiTech/safitech2.png',
        '/assets/project_safiTech/safitech3.png',
      ]
    },
    {
      id: 3,
      title: t('projects.maintenance.title'),
      description: t('projects.maintenance.description'),
      year: '2024',
      tech: ['.Net Core MVC', 'SQL Server', 'Razor', 'Jquery', 'HTML', 'CSS'],
      details: t('projects.maintenance.details'),
      features: [
        t('projects.maintenance.features.0'),
        t('projects.maintenance.features.1'),
        t('projects.maintenance.features.2'),
        t('projects.maintenance.features.3')
      ],
      images: [
        '/assets/projet_mainetenance/Mainetenance1.png',
        '/assets/projet_mainetenance/Mainetenance2.png',
      ]
    },
    {
      id: 4,
      title: t('projects.rentalCar.title'),
      description: t('projects.rentalCar.description'),
      year: '2024',
      tech: ['Spring Boot', 'MySQL', 'Laravel', 'React'],
      details: t('projects.rentalCar.details'),
      features: [
        t('projects.rentalCar.features.0'),
        t('projects.rentalCar.features.1'),
        t('projects.rentalCar.features.2'),
        t('projects.rentalCar.features.3'),
      ],
      images: [
        '/assets/project_rentalCar/azulcar.jpg',
      ]
    },
    {
      id: 5,
      title: t('projects.birdWorld.title'),
      description: t('projects.birdWorld.description'),
      year: '2025',
      tech: ['Flutter', 'Github Codespaces', 'Google Firebase', 'Google Colab'],
      details: t('projects.birdWorld.details'),
      features: [
        t('projects.birdWorld.features.0'),
        t('projects.birdWorld.features.1'),
        t('projects.birdWorld.features.2'),
      ],
      images: [
        '/assets/project_birdWorld/mockuper.png',
        '/assets/project_birdWorld/mockuper (9).png',
        '/assets/project_birdWorld/mockuper (8).png',
        '/assets/project_birdWorld/mockuper (7).png',
        '/assets/project_birdWorld/mockuper (5).png'
      ]
    },
    {
      id: 6,
      title: t('projects.dwano.title'),
      description: t('projects.dwano.description'),
      year: '2024',
      tech: ['Kotlin', 'Material Icon', 'SQLite'],
      details: t('projects.dwano.details'),
      features: [
        t('projects.dwano.features.0'),
        t('projects.dwano.features.1'),
        t('projects.dwano.features.2'),
        t('projects.dwano.features.3'),
      ],
      images: [
        '/assets/project_dwano/dwano-0.jpg',
        '/assets/project_dwano/dwano-1.jpg',
        '/assets/project_dwano/dwano-2.jpg',
        '/assets/project_dwano/dwano-3.jpg',
        '/assets/project_dwano/dwano-4.jpg',
        '/assets/project_dwano/dwano-5.jpg',
      ]
    },

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
      <div className={`projects-container ${isVisible ? 'visible' : ''}`}>

        <div className="projects-header">
          <h2 className="projects-title">{t('projects.title')}</h2>
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
                    {t('projects.viewDetails')}
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
                  <h4>{t('projects.features')}</h4>
                  <ul>
                    {selectedProject.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="modal-tech">
                  <h4>{t('projects.technologies')}</h4>
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