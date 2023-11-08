import React, { useState } from 'react';
import './Navbar.css';
import MyResume from "./Images/MyResume9.pdf";
import { Link } from "react-scroll"; // or React Router Link
import DarkMode from './DarkMode';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="container">
      <div className={`navbar ${menuOpen ? 'menu-open' : 'menu-closed'}`}>
        <div className="left">
          <div className="logo">SAMIULLAH</div>
          
        </div>
        <div className="right">
          <div className={`tabs ${menuOpen ? 'tabs-open' : ''}`}>
            <Link to="home" spy={true} smooth={true} offset={50} duration={500}>Home</Link>
            <Link to="about" spy={true} smooth={true} offset={50} duration={500}>About</Link>
            <Link to="portfolio" spy={true} smooth={true} offset={50} duration={500}>Portfolio</Link>
            <Link to="experience" spy={true} smooth={true} offset={50} duration={500}>Experience</Link>
            <Link to="education" spy={true} smooth={true} offset={50} duration={500}>Education</Link>
            <Link to="contact" spy={true} smooth={true} offset={50} duration={500}>Contact</Link>
            <Link to=""><DarkMode/></Link>

            <a href={MyResume} download="Samiullah-Resume1.pdf">
              <button className="btn rounded-pill">
                <span>Download CV</span>
              </button>
            </a>
          </div>

          <div className="menu-icon" onClick={toggleMenu}>
            <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
