import React from 'react';

import './Banner.css';
import Arrow from '../../assets/Arrow'
function Banner() {
  return (
    <div className="bannerParentDiv">
      <div className="bannerChildDiv">
        <div className="menuBar">
          <div className="categoryMenu">
            <span>ALL CATEGORIES</span>
            <Arrow></Arrow> 
          </div>
          <div className="otherQuickOptions">
            <span><a href="#Cars" className="quickOption">Cars</a></span>
            <span className="quickOption">Motorcycles</span>
            <span className="quickOption">Mobile Phones</span>
            <span className="quickOption">For Sale:Houses & Apartments</span>
            <span className="quickOption">Scooters</span>
            <span className="quickOption">Commercial & Other Vehicles</span>
            <span className="quickOption">For Rent: House & Apartments</span>
          </div>
        </div>
        <div className="banner">
          <img
            src="../../../Images/banner copy.png"
            alt=""
          />
        </div>
      </div>
      
    </div>
  );
}

export default Banner;
