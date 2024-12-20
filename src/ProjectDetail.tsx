import React from 'react';
import { useLocation } from 'react-router-dom';

const projects = [
  {
    title: "CAMDN | HACC2024 Community App to Meet Digital Navigators",
    description: "Teaching people how to use technology through community digital navigators.",
    location: "Honolulu, HI",
  },
  {
    title: "Trophy Room | A social media platform where people can share Achievements",
    description: "A platform for showcasing achievements and connecting with others.",
    location: "Honolulu, HI",
  },
  {
    title: "HealthBase | A healthcare system application",
    description: "Revolutionizing EMRs by centralizing patient data.",
    location: "Honolulu, HI",
  },
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
    <div className="project-detail">
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <p>Location: {project.location}</p>
    </div>
  );
};

export default ProjectDetail;
