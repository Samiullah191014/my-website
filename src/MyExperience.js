import React from 'react';
import { RiComputerLine } from 'react-icons/ri';
import { PiMathOperations } from 'react-icons/pi';
import { HiOutlineDocumentDuplicate } from 'react-icons/hi';
import { RiHomeOfficeLine } from 'react-icons/ri';
import experience from "./Images/experience1.png"

const MyExperience = () => {
  return (
    <>
      <div className="container marginclass2 "  data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" id='experience'>
        <div className='row'>
         <div className='col-lg-3 d-none d-lg-block'></div>
        <div className="col-12 col-lg-6 text-center mt-5">
    <h3 className="text-color">Experience</h3>
    <h2 className='widclass'>My Work & Experience</h2>
    <p className="textColor"> Experienced professional available for web development, document control, data entry operations, and office tasks.</p>
  </div>
          <div className="col-lg-3 d-none d-lg-block">
    <img src={experience} alt="pic" style={{ width: '250px', height: '250px' }} />
  </div>
        </div>

        <div className="row d-flex justify-content-center mt-5">
          <div className="col-12 col-md-6 col-lg-3 mb-3 ">
            <div className="card text-center">
              <div className="card-body ">
                <span className="iconbold">
                  <RiComputerLine />
                </span>
                <h4 className='mt-3 widclass'>Web Development</h4>
                <p className='mt-3 textColor1'>
                  I possess three years of hands-on experience in web development, specializing in the MERN stack (MongoDB, Express.js, React, Node.js). My expertise extends to building dynamic and responsive web applications that deliver exceptional user experiences.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 mb-3">
            <div className="card text-center">
              <div className="card-body">
                <span className="iconbold">
                  <PiMathOperations />
                </span>
                <h4 className='mt-3 widclass'>Data Entry Operator</h4>
                <p className='mt-3 textColor1'>
                  I am well-equipped to excel as a data entry operator, with a keen eye for detail and a strong commitment to accuracy. My proficiency in data entry software and the ability to handle large volumes of information make me a reliable choice for efficient data management. I am dedicated to maintaining data integrity and optimizing workflow processes.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 mb-3">
            <div className="card text-center">
              <div className="card-body">
                <span className="iconbold">
                  <HiOutlineDocumentDuplicate/>
                </span>
                <h4 className='mt-3 widclass'>Document Controller</h4>
                <p className='mt-3 textColor1'>
                  I am well-suited for the role of a document controller, with a strong aptitude for organizing and managing documents effectively. My attention to detail, ability to maintain version control, and ensure document integrity make me a valuable asset in document management.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 mb-3">
            <div className="card text-center">
              <div className="card-body">
                <span className="iconbold">
                  <RiHomeOfficeLine />
                </span>
                <h4 className='mt-3 widclass'>Office Work</h4>
                <p className='mt-3 textColor1'>
                  As a software engineer, I am adaptable and proficient in a wide range of computer-related office tasks. My technical background equips me to excel in office work, including data analysis, software troubleshooting, and IT support, ensuring seamless operations within the office environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyExperience;
