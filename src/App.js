// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Contact from './Components/contact';
import About from './Components/About';
import Projects from './Components/Projects';
import Hero from './Components/Hero';
import Skills from './Components/skills';
import projectData from './Components/projectData';

function App() {
  return (
    <div>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Hero/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/pro' element={<Projects/>}/>
        <Route path='/skill' element={<Skills/>}/>
        <Route path='/fot' element={<Footer/>}/>
        <Route path='/pd' element={<Projects projects={projectData} />}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
//  <Navbar />
// <Hero />
// <About />
// <Skills />
// <Projects projects={projectData} /> {/* Pass projectData as a prop */}
// <Contact />
// <Footer /> 