import React from 'react';
import about from './Images/experience1.jpg';
import SkillBar from './SkillBar';

const MySkill = () => {
  return (
    <div className="container mt-5" data-aos="flip-left"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="2000">
      <div className="row">
        <div className="col-12 col-md-6 mt-5 d-flex flex-column">
          <h4 className="text-color">Design is Life</h4>
          <h2 className=''>I Develop Skills Regularly to Keep Me Updated</h2>
          <p className="textColor">Most common methods for designing websites that work well on desktop are responsive and adaptive design</p>
          {/* Show SkillBar component second for small screens */}
        <div className="col-12 d-flex justify-content-center order-2 mt-3">
          <SkillBar />
        </div>
        </div>

        

        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
          <img
            src={about}
            alt=""
            className="img-fluid imgwidth" 
            style={{ width: '400px', height: '600px' }}
          />
        </div>
      </div>
    </div>
  );
};

export default MySkill;
