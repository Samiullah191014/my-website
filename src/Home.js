import React from 'react'
import './Home.mod.css'
import pic from './Images/Sami-pic.jpg'
import { BiLogoFacebook } from 'react-icons/bi'
import { BiLogoTwitter } from 'react-icons/bi'
import { FaLinkedinIn } from 'react-icons/fa'

const Home = () => {
  const backimage = require('./Images/bg-home2.jpg');

  const containerStyle = {
    background: `url(${backimage}) center/cover no-repeat`,
    
  };

  const scrollToAboutMe = () => {
    const aboutMeSection = document.getElementById('about');
    if (aboutMeSection) {
      aboutMeSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="container mt-5" style={containerStyle} id='home'>
        <div className="row d-flex">
          <div className="col d-flex justify-content-center order-lg-2">
            <img src={pic} alt="man-pic" style={{ width: '300px', height: '300px', marginTop: '30px' }} />
          </div>

          <div className="col gapclass order-lg-1" style={{ marginTop: '50px' }}>
            <h3 className="text-color mt-3 mt-lg-0">Hello, I'm</h3>
            <h1 className="fs-1 fw-bolder textcolor3 "> Samiullah</h1>
            <span className="fs-4 textcolor3">A <span className="text-color1 fs-4"> Web Developer </span> From <span className="text-color2 fs-4">Peshawar</span> </span>
            <p className="fs-5 gapclass1 textColor">I'm a creative web developer based in Pakistan, and I'm very passionate and dedicated to my work.</p>
            <div className="d-flex gap-4 justify-content-center justify-content-lg-start ">
              <button className="btn rounded-pill" onClick={scrollToAboutMe}><span>About Me</span></button>
              <div className="d-flex gap-2">
                <span><BiLogoFacebook className="fs-5 pointer" /></span>
                <span><BiLogoTwitter className="fs-5 pointer" /></span>
                <span><FaLinkedinIn className="fs-5 pointer" /></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home












