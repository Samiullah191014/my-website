import React from 'react'
import about1 from "./Images/about1.png"
import about2 from "./Images/about2.png"
import about from "./Images/about.jpg"
import TypeAnimations from './TypeAnimations'

const About = () => {

  const scrollToContactMe = () => {
    const aboutMeSection = document.getElementById('contact');
    if (aboutMeSection) {
      aboutMeSection.scrollIntoView({ behavior: 'smooth' });
    }
  }; 

  return (
    <div className='container mt-5 ' data-aos="flip-left"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="2000" id='about'>
      <div className='row'>
        <div className='col-12 col-md-2 d-none d-md-block '>
          <img src={about1} alt='' style={{ width: '150px', height: '150px' }} />
        </div>

        <div className='col-12 col-md-4 mt-5 d-flex justify-content-center align-items-center'>
          <img src={about} alt='' className='img-fluid' style={{ maxWidth: '100%' }} />
        </div>

        <div className='col-12 col-md-4 mt-5 '>
          <h6 className='text-color text-align1'><TypeAnimations/></h6>
          <h2 className='text-align1 '>I Can Develop anytype website You Want</h2>
          <p className='textColor text-left'>Hello there! I'm a web designer, and I'm very passionate and dedicated to my work. With 3 years of experience as a professional web developer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration.</p>
          <button className='btn rounded-pill mx-auto mx-md-0' onClick={scrollToContactMe}><span>Hire Me</span></button>
        </div>

        <div className='col-12 col-md-2 d-none d-md-block '>
          <img src={about2} alt='' style={{ width: '150px', height: '150px', marginTop: '300px' }} />
        </div>
      </div>
    </div>
  )
}

export default About


