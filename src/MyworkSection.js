import React from 'react';
import mywork from "./Images/my-work.png";

const MyworkSection = () => {
  return (
    <>
      <div className='container mt-5' data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" >
        <div className='row'>
          <div className='col-12 col-lg-3 d-none d-lg-block'>
            <img src={mywork} alt='pic' style={{ width: '200px', height: '200px' }} />
          </div>
          <div className='col-12 col-lg-6 text-center text-lg-left mt-5'>
            <h3 className='text-color'>Portfolio</h3>
            <h1 className=''>My Amazing Works</h1>
            <p className='textColor'>Most common methods for designing websites that work well on desktop is responsive and adaptive design</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyworkSection;
