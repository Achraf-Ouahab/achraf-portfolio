import "./styles/Skills.css"
import { useState } from 'react';


function Skills() {
  const [activeTab, setActiveTab] = useState('languages');

  const skillsData = {
    languages: [
      { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    ],
    frontend: [
      { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
    ],
    backend: [
      { name: 'Spring Boot', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
      { name: '.NET', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg' },
    ],
    database: [
      { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
      { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
    ],
    tools: [
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    ],
  };

  const tabs = [
    { key: 'languages', title: 'Langages', icon: '' },
    { key: 'frontend', title: 'Frontend', icon: '' },
    { key: 'backend', title: 'Backend', icon: '' },
    { key: 'database', title: 'Bases de données', icon: '' },
    { key: 'tools', title: 'Outils', icon: '' },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        
        <div className="skills-header">
          <h2 className="skills-title">Compétences</h2>
          <div className="title-underline"></div>
        </div>

        {/* Tabs Navigation */}
        <div className="tabs-navigation">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              className={`tab-button ${activeTab === tab.key ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.key)}
            >
              <span className="tab-icon">{tab.icon}</span>
              <span className="tab-title">{tab.title}</span>
            </button>
          ))}
        </div>

        {/* Skills Content */}
        <div className="skills-content">
          <div className="skills-row">
            {skillsData[activeTab].map((skill, index) => (
              <div 
                key={index} 
                className="skill-item"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="skill-icon-wrapper">
                  <img src={skill.icon} alt={skill.name} className="skill-icon" />
                </div>
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Skills;