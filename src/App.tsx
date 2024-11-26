import React, { useState, useEffect } from 'react';
import './App.css';

interface Project {
  title: string;
  description: string;
  location: string;
}

const SkillGrid: React.FC = () => {
  const skills = [
    { name: 'HTML', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'TypeScript', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'JavaScript', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'Vue', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
    { name: 'React', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Docker', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'Java', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'Python', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'FastAPI', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
    { name: 'Spring', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
    { name: 'PostgreSQL', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  ];

  return (
    <div className="skill-grid">
      {skills.map((skill, index) => (
        <div key={index} className="skill-item">
          <img src={skill.image} alt={skill.name} />
          <p>{skill.name}</p>
        </div>
      ))}
    </div>
  );
};

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const projects: Project[] = [
    { 
      title: "CAMDN | HACC2024 Community App to Meet Digital Navigators", 
      description: "CAMDN is a service with our state library system to teach people how to use technology by connecting them to community digital navigators.",
      location: "Honolulu, HI"
    },
    { 
      title: "Trophy Room | A social media platform where people can share Achievements", 
      description: "Trophy Room is an app designed to celebrate accomplishments and share future goals with a like-minded community. This app gives a platform to showcase your achievements, to connect with others, and to allow for mutual support and encouragement to check off the next adventure on your bucket list!",
      location: "Honolulu, HI"
    },
    { 
      title: "Health Base | Health-Base is a healthcare system application", 
      description: "Health Base is designed to revolutionize eMRS. Its key objective is to centralize patient data, eliminating the need for extensive inter-service communication. By integrating critical functions such as billing and patient-provider communication, Health Base significantly improves operational efficiency, helping healthcare providers reduce time spent on administrative tasks and enhance patient care.",
      location: "Honolulu, HI"
    },
    { 
      title: "Task Manager Web Service", 
      description: "This task manager application is a Spring Boot application designed to manage tasks and users. It provides a RESTful API for creating, reading, updating, and deleting tasks, as well as managing user authentication and authorization.",
      location: "Honolulu, HI"
    },
  ];

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const SunIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5"></circle>
      <line x1="12" y1="1" x2="12" y2="3"></line>
      <line x1="12" y1="21" x2="12" y2="23"></line>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
      <line x1="1" y1="12" x2="3" y2="12"></line>
      <line x1="21" y1="12" x2="23" y2="12"></line>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
    </svg>
  );

  const MoonIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </svg>
  );

  

  return (
    <div className={`App ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <header className="header"> 
        <div className='buttons'>
          <button onClick={toggleTheme} className="theme-toggle">
            {isDarkMode ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>        
        <div className='introduction'>
          <h1>Hi! my name is Geremu and I'm a software engineer.</h1>
          <p>
            <a href="https://www.linkedin.com/in/geremu-mckinney" target="_blank" rel="noopener noreferrer">LinkedIn</a> | <a href="https://github.com/REMUSWRLD" target="_blank" rel="noopener noreferrer">GitHub</a>
          </p>
        </div>
      </header>

      <main>
        <section id="summary">
          <p>Dedicated worker with a strong desire to transition into software engineering. Expertise in cross-functional collaboration and communication. Meticulous eye for detail and strong ability to meet the individual needs of customers/clients. Committed to continuous learning in a software engineering role. Enthusiastic about developing innovative solutions and contributing to impactful projects in tech.</p>
        </section>

        <article id="skills">
          <div className='skill-detail'>
            <h1>Tools and Languages I work with!</h1>          
          </div>
          <SkillGrid />
        </article>

        <article id="projects">
          <div className='project-detail'>
            <h1>Recent Projects!</h1>          
          </div>
          <div className="project-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <p>{project.location}</p>
              </div>
            ))}
          </div>
        </article>
      </main>

      <footer>
        <p>&copy; 2023 Geremu McKinney. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;