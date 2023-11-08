// Mywork.js
import React, { useState } from 'react';
import mywork1 from "./Images/1.jpg";
import mywork2 from "./Images/Capture12.PNG";
import mywork3 from "./Images/Capture.PNG";
import mywork4 from "./Images/4.jpg";
import mywork5 from "./Images/web6.jpg";
import mywork6 from "./Images/Captur9.PNG";


const Mywork = () => {
  const [selectedTab, setSelectedTab] = useState('All');

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  const filterImages = () => {
    switch (selectedTab) {
      case 'All':
        return [mywork1, mywork2, mywork3, mywork4, mywork5, mywork6];
      case 'Login':
        return [mywork1];
      case 'Courses':
        return [mywork4, mywork5];
      case 'Study':
        return [mywork2, mywork3, mywork6];
      default:
        return [];
    }
  };

  const imagesToShow = filterImages();

  return (
    <>
    <div className="container" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" id='portfolio'>
      <div className="row">
        <div className="col text-center">
          <ul className="nav nav-tabs justify-content-center custom-tabs">
            <li className="nav-item">
              <a
                className={`nav-link ${selectedTab === 'All' ? 'active' : ''}`}
                onClick={() => handleTabClick('All')}
              >
                All
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${selectedTab === 'Login' ? 'active' : ''}`}
                onClick={() => handleTabClick('Login')}
              >
                Login
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${selectedTab === 'Courses' ? 'active' : ''}`}
                onClick={() => handleTabClick('Courses')}
              >
                Courses
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${selectedTab === 'Study' ? 'active' : ''}`}
                onClick={() => handleTabClick('Study')}
              >
                Study
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col">
          <div className="row">
            {imagesToShow.map((image, index) => (
              <div key={index} className="col-md-4">
                <img
                  src={image}
                  alt={`work${index + 1}-img`}
                  className={`img-fluid ${index === 0 || index === 2 || index === 4 || index === 1 || index === 3 || index === 5 ? 'zoom-out-image' : ''}`}
                  style={{
                    width: (index === 0 || index === 2 || index === 4) && '100%',
                    height: (index === 0 || index === 2 || index === 4) && 'auto',
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    
    </>
  );
};

export default Mywork;
