import React from "react";
import "./../styles/BrandsComponentStyles.css";
import brandImg1 from "./../images/brandImg1.png";
import brandImg2 from "./../images/brandImg2.png";
import brandImg3 from "./../images/brandImg3.png";
import brandImg4 from "./../images/brandImg4.png";
import brandImg5 from "./../images/brandImg5.png";

const BrandsComponent = () => {
  return (
    <div>
      <div className="brandImages">
        <p className="brand-text">Brands</p>
        <div className="brand-images">
            <img src={brandImg1} alt="brandImg1"/>
            <img src={brandImg2} alt="brandImg2"/>
            <img src={brandImg3} alt="brandImg3"/>
            <img src={brandImg4} alt="brandImg4"/>
            <img src={brandImg5} alt="brandImg5"/>
        </div>
      </div>
    </div>
  );
};

export default BrandsComponent;
