import React, { useState } from 'react';
import './App.css';

interface Project {
  title: string;
  description: string;
  location: string;
}

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
            <a href="https://www.linkedin.com/in/geremu-mckinney" target="_blank" rel="noopener noreferrer">LinkedIn</a> | 
            <a href="https://github.com/REMUSWRLD" target="_blank" rel="noopener noreferrer">GitHub</a>
          </p>
        </div>
      </header>

      <main>
        <section id="summary">
          <h2>Summary</h2>
          <p>Dedicated worker with a strong desire to transition into software engineering. Expertise in cross-functional collaboration and communication. Meticulous eye for detail and strong ability to meet the individual needs of customers/clients. Committed to continuous learning in a software engineering role. Enthusiastic about developing innovative solutions and contributing to impactful projects in tech.</p>
        </section>

        <section id="skills">
          <h2>Technical Skills</h2>
          <ul>
            <li><strong>Front end:</strong> HTML, CSS, TypeScript, JavaScript, Vue, React, Docker</li>
            <li><strong>Back End:</strong> Java, Python, FastAPI, Spring boot, Docker</li>
            <li><strong>Databases:</strong> SQL, PostgreSQL, JDBC, Table Design, E/R Diagrams</li>
            <li><strong>Methodologies:</strong> Agile, OOP</li>
            <li><strong>Testing:</strong> Unit Testing (JUnit), Integration Testing</li>
          </ul>
        </section>

        <section id="projects">
          <h2>Technical Projects</h2>
          <div className="project-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <p>{project.location}</p>
              </div>
            ))}
          </div>
        </section>

        {/* <section id="experience">
          <h2>Professional Experience</h2>
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <h3>{exp.company} | {exp.position}</h3>
              <p>{exp.location} | {exp.duration}</p>
              <ul>
                {exp.responsibilities.map((resp, i) => (
                  <li key={i}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </section> */}

        <section id="education">
          <h2>Education</h2>
          <h3>Tech Elevator</h3>
          <p>November 2023 - Augest 2024 | Full stack bootcamp designing software systems and solutions with 800+ hours of education and application.</p>
        </section>
      </main>

      <footer>
        <p>&copy; 2023 Geremu McKinney. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;