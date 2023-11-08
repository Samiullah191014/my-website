

import React from 'react';

const SkillBar = () => {
  const webDevelopmentBars = [
    { name: 'Web Development', width: '90%', percentage: '90%', colorClass: 'bg-info' },
    { name: 'WordPress', width: '50%', percentage: '50%', colorClass: 'bg-danger' },
    { name: 'SEO', width: '60%', percentage: '60%', colorClass: 'bg-warning' },
    { name: 'web Problem Solving', width: '95%', percentage: '95%', colorClass: 'bg-primary' },
  ];

  const otherBars = [
    { name: 'MS Excel', width: '90%', percentage: '90%', colorClass: 'bg-info' },
    { name: 'Digital Marketing', width: '70%', percentage: '70%', colorClass: 'bg-secondary' },
    { name: 'English Communication', width: '85%', percentage: '85%', colorClass: 'bg-success' },
    { name: 'GitHub', width: '90%', percentage: '90%', colorClass:'bg-primary' },
  ];

  return (
    <>
      
        <div className="row" >
          <div className="col">
            <h2  className=" d-none d-md-block ">Web Development Skills</h2>
            {webDevelopmentBars.map((bar, index) => (
              <div className="progress" style={{ margin: '8px' }} key={index}>
                <div
                  className={`progress-bar ${bar.colorClass}`}
                  role="progressbar"
                  style={{ width: bar.width }}
                >
                  {bar.name} - {bar.percentage}
                </div>
              </div>
            ))}
          </div>
          <div className="col">
            <h2  className=" d-none d-md-block ">Other Important Skills</h2>
            {otherBars.map((bar, index) => (
              <div className="progress" style={{ margin: '8px' }} key={index}>
                <div
                  className={`progress-bar ${bar.colorClass}`}
                  role="progressbar"
                  style={{ width: bar.width }}
                >
                  {bar.name} - {bar.percentage}
                </div>
              </div>
            ))}
          </div>
        </div>
      
    </>
  );
};

export default SkillBar;
