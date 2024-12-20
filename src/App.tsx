import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import ProjectDetail from './ProjectDetail';
import './App.css';

const ProjectList: React.FC<{ onCardClick: (title: string) => void }> = ({ onCardClick }) => {
  const projects = [
    { title: "CAMDN | HACC2024 Community App to Meet Digital Navigators", isHidden: false },
    { title: "Trophy Room | A social media platform where people can share Achievements", isHidden: true },
    { title: "HealthBase | A healthcare system application", isHidden: false },
    { title: "Task Manager | A Web Service for managing tasks", isHidden: false },
  ];

  return (
    <div className="project-grid">
      {projects.map((project, index) => (
        <div
          key={index}
          className={`project-card ${project.isHidden ? "blur" : ""}`}
          onClick={() => !project.isHidden && onCardClick(project.title)}
        >
          <h3>{project.title}</h3>
        </div>
      ))}
    </div>
  );
};

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
  const navigate = useNavigate();

  const handleCardClick = (title: string) => {
    navigate(`/projects/${encodeURIComponent(title)}`);
  };

  return (
    <div className="App">
      <Routes>
        <Route
          path="/web-portfolio"
          element={
            <>
              <header>
                <div className="backdrop">
                  <div className="introduction">
                    <h1>Hi! My name is Geremu and I'm a software engineer.</h1>
                    <div className="buttons">
                      <p>
                        <a href="https://www.linkedin.com/in/geremu-mckinney" target="_blank" rel="noopener noreferrer">LinkedIn</a> |
                        <a href="https://github.com/REMUSWRLD" target="_blank" rel="noopener noreferrer">GitHub</a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="backdrop-edge"></div>
              </header>
              <main>
                <section id="summary">
                  <h2>Welcome to my own little world!</h2>
                  <p>
                    I am very excited to have this site up and running.
                    I currently work in Healthcare Administration but this nerd stuff... it's my passion!
                    I'm always looking for opportunities to learn and I am proud to showcase my achievements on my site!
                  </p>
                </section>
                <article id="skills">
                  <div className="skill-detail">
                    <h1>Some of the tools and Languages I work with!</h1>
                  </div>
                  <SkillGrid />
                </article>
                <article id="projects">
                  <div className="project-detail">
                    <h1>Recent Projects!</h1>
                  </div>
                  <ProjectList onCardClick={handleCardClick} />
                </article>
              </main>
              <footer>
                <p>&copy; 2023 Geremu McKinney. All rights reserved.</p>
              </footer>
            </>
          }
        />
        <Route path="/projects/:title" element={<ProjectDetail />} />
      </Routes>
    </div>
  );
};

export default App;
