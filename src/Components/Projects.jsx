import React from 'react';
import './Projects.css';
import img1 from '../Img/movies.jpg';
import img2 from '../Img/Shopping.jpg';
import img3 from '../Img/portfolio.jpg';
import img4 from '../Img/quiz.jpg';
import img5 from '../Img/fi.png';

const projectData = [
  {
    title: 'Streaming Movie App',
    description: 'A streaming movie app with a sleek design and payment system.',
    technologies: ['React', 'Node.js', 'Express'],
    liveLink: 'https://linkedin.com/in/yonas-alemu-b09298336 ',
    codeLink: 'https://github.com/liyonays/Yonas-Alemu',
    img: img1,
  },
  {
    title: 'E-commerce App',
    description: 'An e-commerce app with a full checkout and payment system.',
    technologies: ['React', 'Node.js', 'Express'],
    liveLink: 'https://linkedin.com/in/yonas-alemu-b09298336 ',
    codeLink: 'https://github.com/liyonays/Yonas-Alemu',
    img: img2,
  },
  {
    title: 'Portfolio App',
    description: 'A portfolio app showcasing my projects and skills.',
    technologies: ['React', 'Redux'],
    liveLink: 'https://linkedin.com/in/yonas-alemu-b09298336 ',
    codeLink: 'https://github.com/liyonays/Yonas-Alemu',
    img: img3,
  },
  {
    title: 'Quiz Challenges',
    description: 'An ultimate quiz challenge app with fun and engaging questions.',
    technologies: ['React', 'Node.js', 'Express'],
    liveLink: 'https://linkedin.com/in/yonas-alemu-b09298336 ',
    codeLink: 'https://github.com/liyonays/Yonas-Alemu',
    img: img4,
  },
  {
    title: 'Financial Planning Tool',
    description: 'A tool to manage and plan your finances effectively.',
    technologies: ['React', 'Redux'],
    liveLink: 'https://linkedin.com/in/yonas-alemu-b09298336 ',
    codeLink: 'https://github.com/liyonays/Yonas-Alemu',
    img: img5,
  },
];

const Projects = () => (
  <>
    <div className="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.img} alt={`${project.title}`} className="project-img" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.technologies.map((tech, i) => (
                <span key={i} className="tech">{tech}</span>
              ))}
            </div>
            <div className="project-links">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="project-button"
              >
                Contact Me
              </a>
              <a
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="project-button"
              >
                View Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
    <footer>
    <p className="footer">
  &copy; {new Date().getFullYear()} Yonas Alemu. All rights reserved.
</p>
    </footer>
  </>
);

export default Projects;
