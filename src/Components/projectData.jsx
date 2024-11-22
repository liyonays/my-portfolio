import React from 'react';
const projectData = [
  {
    title: 'E-commerce App',
    description: 'An e-commerce app with a full checkout and payment system.',
    technologies: ['React', 'Node.js', 'Express', 'Stripe'],
    liveLink: 'https://example.com',
    codeLink: 'https://github.com/username/project'
  },
  // Add more projects here
];

const Projects = () => (
  <section id="projects" className="projects">
    <h2>My Projects</h2>
    <div className="projects-grid">
      {projectData.map((project, index) => (
        <div key={index} className="project-card">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className="tech-stack">
            {project.technologies.map((tech, i) => <span key={i} className="tech">{tech}</span>)}
          </div>
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-button">View Live</a>
          <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="project-button">View Code</a>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
