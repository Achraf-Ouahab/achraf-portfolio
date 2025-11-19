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
      github: [
        { name: 'Frontend', url: 'https://github.com/Achraf-Ouahab/Front_CarReparation' },
        { name: 'Backend', url: 'https://github.com/mohamedelqasemy/miniprojet_WebSiteCarReparation' }
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
      github: [
        { name: 'Backend/Frontend', url: 'https://github.com/mohamedelqasemy/MINIPRO' }
      ],
      images: [

        '/assets/project_safiTech/safitech1.png',
        '/assets/project_safiTech/safitech2.png',
        '/assets/project_safiTech/safitech3.png',
        '/assets/project_safiTech/safitech4.png',
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
      github: [
        { name: 'Backend/Frontend', url: 'https://github.com/Must-Addazi/AspNetMaintenanceApp' }
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
      github: [
        { name: 'Frontend', url: 'https://github.com/mohamedelqasemy/FrontEnd_LocationVoiture' },
        { name: 'Backend-Laravel', url: 'https://github.com/Achraf-Ouahab/Location_Voiture' },
        { name: 'Backend-SpringBoot', url: 'https://github.com/mohamedelqasemy/LocationVoitureSpringBoot' }
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
      github: [
        { name: 'Application', url: 'https://github.com/Must-Addazi/bird-world-flutter-app' },
        { name: 'Model-audio', url: 'https://github.com/Achraf-Ouahab/audio-bird-api' },
        { name: 'Model-image', url: 'https://github.com/mohamedelqasemy/bird_recognition_image' },
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
      github: [
        { name: 'Application', url: 'https://github.com/mohamedelqasemy/DWANO_ProjetMobile' },
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
              {project.github && project.github.length > 0 && (
                <div className="modal-github">
                  <div className="github-links">
                    {project.github.map((repo, idx) => (
                      <a
                        key={idx}
                        href={repo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="github-link-modal"
                        title={repo.name}
                      >
                        <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor">
                          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              )}
              {/*card*/}
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