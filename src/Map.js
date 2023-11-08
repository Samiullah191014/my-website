import React from 'react';
import map1 from "./Images/map1.png"

const Map = () => {
  return (
    <>
    <div className='image-container d-none d-md-block'>
      <img src={map1} alt='img' style={{width:'200px', height:'200px'}} />
    </div>
    <div className="container marginclass" >
      <div className="row">
        <div className="col-md-10 mt-5 offset-md-1">
          <div className="map-container">
            <iframe
              className="gmap_iframe"
              src="https://maps.google.com/maps?width=961&amp;height=400&amp;hl=en&amp;q=islamia college university peshawar&amp;t=p&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              width="100%"
              height="400"
              frameborder="0"
              scrolling="no"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Map;
