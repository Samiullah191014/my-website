import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Import the icons
import samiphoto from './Images/Sami.png';

const NFooter = () => {
  return (
    <>
    <div className='container mt-5'>
    <footer className="py-4">
      <div className="container">
        <div className="text-center">
          <div className="d-flex justify-content-between align-items-center flex-wrap">
            <div className="footer-brand">
              <a href="">
                <img
                  src={samiphoto}
                  alt="Sami-photo"
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                  }}
                />
                <h3 className='widclass'>Samiullah</h3>
              </a>
            </div>
            <div className="footer-links">
              <a href="https://www.facebook.com/profile.php?id=100084137440075&mibextid=ZbWKwL">
                <FaFacebook />
              </a>
              <a href="https://twitter.com/Samiull72617599?t=R6CxmDKXGyHmstsu3T-p2w&s=09">
                <FaTwitter />
              </a>
              <a href="http://instagram.com/sa.miullah194/">
                <FaInstagram />
              </a>
              <a href="https://www.linkedin.com/in/samullah?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                <FaLinkedin />
              </a>
            </div>
          </div>
          <hr style={{ borderBottom: '1px dashed orangered' }} />
          <div className="footer-copyright nfooterbg" >
            &copy; All rights reserved by Samiullah &reg;{2023}
          </div>
        </div>
      </div>
    </footer>
    </div>
    </>
  );
}

export default NFooter;
