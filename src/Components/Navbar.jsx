import React from 'react';
import '../Components/Navbar.css'
import { Link } from 'react-router-dom';
const Navbar = () => (
  <>
   <nav className='nav'>
    <div>
    <Link to='/'>Home</Link>
    <Link to='/about'>About</Link>
    <Link to='/contact'>Contact</Link>
    <Link to='/pro'>Projects</Link>
    <Link to='/skill'>Skill</Link>
    </div>
  </nav>
  <hr className='hr' />
  <div>
     <div class="wave"></div>
     <div class="wave"></div>
     <div class="wave"></div>
  </div>
 </>
);

export default Navbar;
