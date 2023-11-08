import React from 'react';
import contactimg from "./Images/contact-img.png";

const ContactSection = () => {
  return (
    <>
      <div className='container mt-5' data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" id='contact'>
        <div className='row'>
          <div className='col-12 col-lg-3 d-none d-lg-block'>
            <img src={contactimg} alt='pic' style={{ width: '200px', height: '200px' }} />
          </div>
          <div className='col-12 col-lg-6 text-center text-lg-left mt-5'>
            <h3 className='text-color'>Contact Me</h3>
            <h1 className=''>I Want To Hear From You</h1>
            <p className='textColor'>Please fill out the form on this section to contact with me. Or call between 9:00 a.m. to 8:00 p.m. ET, Monday through Friday</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactSection;
