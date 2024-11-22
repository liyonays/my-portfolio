import React from 'react';
import '../Components/About.css';

const About = () => (
  <section id="about">
    <h1>Hello, I'm Yonas</h1>
    
    <h2>Professional Summary</h2>
    <p className="summary">
      Passionate software developer with experience in both front-end and back-end development.
      Skilled in building web applications using React, Node.js, Express, and more. Eager to leverage
      my technical skills and problem-solving abilities to create impactful software solutions.
    </p>
    
    <hr />
    <h2>Technical Skills</h2>
    <ul>
      <li><strong>Front-End:</strong> React, HTML, CSS, JavaScript, Bootstrap</li>
      <li><strong>Back-End:</strong> Node.js, Express, REST APIs, MongoDB, SQL</li>
      <li><strong>Authentication & Payments:</strong> Telebirr, Local Bank</li>
      <li><strong>Development Tools:</strong> Git, VS Code, npm, Postman</li>
      <li><strong>Version Control:</strong> GitHub</li>
      <li><strong>Other:</strong> React Router, Redux, Webpack</li>
    </ul>

    <hr />
    <h2>Professional Experience</h2>
    <h3>Software Developer</h3>
    <ul>
      <li>Developed and maintained scalable web applications using React and Node.js.</li>
      <li>Implemented secure authentication systems using JWT and OAuth.</li>
      <li>Integrated payment processing features with Stripe/PayPal to enhance user experience.</li>
      <li>Collaborated with cross-functional teams to design and develop APIs with Express.</li>
      <li>Monitored and optimized application performance using debugging tools.</li>
    </ul>

    <hr />
    <h2>Projects</h2>
    <h3>Major Projects</h3>
    <ul>
      <li><b>E-commerce, Quiz Challenge, Financial Planning Tool,Streaming Movies and Personal Portfolio</b></li>
      <li>Built a web app with React for UI and Node.js/Express for the back end.</li>
      <li>Set up secure authentication with JWT and integrated Stripe for payments.</li>
      <li>Managed user roles and permissions using Express middleware.</li>
    </ul>
    
    <h3>Portfolio Website</h3>
    <ul>
      <li>Developed a personal website using React and Bootstrap to showcase projects.</li>
      <li>Integrated GitHub and LinkedIn links for easy access to professional profiles.</li>
    </ul>

    <hr />
    <h2>Other Experience</h2>
    <ul>
      <li>Graphic Design</li>
      <li>Microsoft Access, Microsoft Word</li>
    </ul>

    <h3>Graphic Design</h3>
    <p>
      Produced logos and social media posts for clients in various industries, including film production.
      My designs aim to capture brand identity and engage audiences across digital platforms.
    </p>

    <h3>Design Tools</h3>
    <ul>
      <li>Adobe Photoshop, Illustrator, Logo Design, Social Media Content Creation</li>
    </ul>

    <hr />
    <h2>Education</h2>
    <ul>
      <li>Mella Programming Academy – October 2024</li>
    </ul>

    <hr />
    <h2>Languages</h2>
    <ul>
      <li>Amharic: Native</li>
      <li>English: Proficient</li>
    </ul>

    <hr />
    <h2>Hobbies and Interests</h2>
    <ul>
      <li>Learning about new technologies and frameworks</li>
      <li>Participating in open-source projects</li>
    </ul>

    <p className="footer">
  &copy; {new Date().getFullYear()} Yonas Alemu. All rights reserved.
</p>
  </section>
);

export default About;
