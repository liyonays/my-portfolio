import React from 'react';
import './Hero.css';
import img from '../Img/jo.jpg'
const Hero = () => (
  <section className="hero">
    <img src={img} alt="" className="hero-photo" />
    <h1>Hello, I'm Yonas Alemu</h1> <br />
    <p>Full-Stack Developer | React & Node.js Specialist</p>
    <a href="/pro" className="cta-button">View My Work</a>
    <p className="footer" style={{textAlign:'center', marginTop:'12%'}}>
  &copy; {new Date().getFullYear()} Yonas Alemu. All rights reserved.
</p>
  </section>
);

export default Hero;
