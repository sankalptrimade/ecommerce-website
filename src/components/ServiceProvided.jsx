import React from "react";
import "./../styles/ServiceProvidedStyles.css";
import pickup from "./../images/delivery-man.png";
import box from "./../images/box.png";
import guarantee from "./../images/guarantee.png";
import availability from "./../images/24-7.png";

const ServiceProvided = () => {
  return (
    <div>
      <div className="servicesParent">
        <div className="children">
          <img
            src={pickup}
            alt="image1"
            style={{ width: "52px", height: "52px" }}
          />
          <p>
            Curb-side
            <br />
            pickup
          </p>
        </div>
        <div className="children">
          <img
            src={box}
            alt="image2"
            style={{ width: "52px", height: "52px" }}
          />
          <p>
            Free shipping on
            <br />
            orders over &#36;50
          </p>
        </div>
        <div className="children">
          <img
            src={guarantee}
            alt="image3"
            style={{ width: "52px", height: "52px" }}
          />
          <p>
            Low prices
            <br />
            guaranteed
          </p>
        </div>
        <div className="children">
          <img
            src={availability}
            alt="image4"
            style={{ width: "52px", height: "52px" }}
          />
          <p>
            Available to
            <br />
            you 24/7
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceProvided;
