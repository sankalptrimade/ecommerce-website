import React from "react";
import "./../styles/InfoImageStyles.css";
import image1 from "./../images/CardImg1.png";
import image2 from "./../images/CardImg2.png";

const InfoImage = () => {
  return (
    <div>
      <div className="cardImage-parent d-flex justify-content-around">
        {" "}
        <div className="image1">
          <img src={image1} alt="image1" />
        </div>
        <div className="image2">
          <img src={image2} alt="image2" />
        </div>
      </div>
    </div>
  );
};

export default InfoImage;
