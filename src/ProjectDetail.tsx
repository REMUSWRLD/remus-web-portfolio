import React from 'react';
import { useLocation } from 'react-router-dom';
import "./ProjectDetail.css";

const projects = [
  {
    title: "CAMDN | HACC2024 Community App to Meet Digital Navigators",
    description: "CAMDN is a service with our state library system to teach people how to use technology by connecting them to community digital navigators.",
    location: "Honolulu, HI",
    demo: "https://example.com/demo-camdn",
    tools: ["React", "TypeScript", "FastAPI"]
  },
  {
    title: "Trophy Room | A social media platform where people can share Achievements",
    description: "This app creates a platform to showcase your achievements and connect with others. It provides a space for mutual support and enocuragment as you check off the next dadventure on your bucket list!",
    location: "Honolulu, HI",
    demo: "https://example.com/demo-trophy-room",
    tools: ["React", "Node.js", "MongoDB"]
  },
  {
    title: "HealthBase | A healthcare system application",
    description: "HealthBase is designed to revolutionize EMRS. Its key objective is to centralize patient data, eliminating the need for extensive inter-service communication. By integrating critical functions such as billing and patient-provider communication, Health Base significantly improves operational efficiency, helping healthcare providers reduce time spent on administrative tasks and enhance patient care.",
    location: "Honolulu, HI",
    demo: "https://example.com/demo-healthbase",
    tools: ["Java", "Spring", "PostgreSQL"]
  },
  {
    title: "Task Manager | A Web Service for managing tasks",
    description: "This task manager application is a Spring Boot application designed to manage tasks and users. It provides a RESTful API for creating, reading, updating, and deleting tasks, as well as managing user authentication and authorization.",
    location: "Honolulu, HI",
    demo: "https://example.com/demo-taskmanager",
    tools: ["Java", "Spring", "PostgreSQL"]
  }
];

const ProjectDetail: React.FC = () => {
  const { pathname } = useLocation();
  const projectTitle = decodeURIComponent(pathname.split('/').pop() || '');

  const project = projects.find((p) => p.title === projectTitle);

  if (!project) {
    return (
      <div className="project-detail">
        <h2>Project Not Found</h2>
        <p>The project you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <div className="project-detail-container">
      <header style={{position: 'static'}}>
        <h1>{project.title}</h1>
        <p>{project.description}</p>
        <p><strong>Location:</strong> {project.location}</p>
      </header>
      <section className="project-demo">
        <h2>Project Demo</h2>
        <iframe 
          src={project.demo} 
          title={`${project.title} Demo`} 
          frameBorder="0" 
          allowFullScreen
          className="demo-frame"
        ></iframe>
      </section>
      <section className="project-tools">
        <h2>Tools Used</h2>
        <ul>
          {project.tools.map((tool, index) => (
            <li key={index}>{tool}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default ProjectDetail;
