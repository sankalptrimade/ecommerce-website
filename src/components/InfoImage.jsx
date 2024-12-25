import React from "react";
import "./../styles/InfoImageStyles.css";
import image1 from "./../images/CardImg1.png";
import image2 from "./../images/CardImg2.png";

const InfoImage = () => {
  return (
    <div>
      <div className="cardImage-parent d-flex justify-content-around align-items-center">
        <div className="image1">
          <img src={image1} alt="image1" />
          <div className="image1-text">
            <p className="image1-text-1">Holiday Deals</p>
            <p className="image1-text-2">Up to 30&#37; off</p>
            <p className="image1-text-3">Selected Smartphone Brands</p>
            <button type="button" className="btn-image1">Shop</button>
          </div>
        </div>
        <div className="image2">
          <img src={image2} alt="image2" />
          <div className="image2-text">
            <p className="image2-text-1">Just In</p>
            <p className="image2-text-2">Take Your Sound Anywhere</p>
            <p className="image2-text-3">Top Headphone Brands</p>
            <button type="button" className="btn-image2">Shop</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoImage;
