import React from "react";
import "./../styles/HelpCenterComponentStyles.css";
import bgImage from "./../images/helpCenterBGImg.png";

const HelpCenterComponent = () => {
  return (
    <div>
      <div className="d-flex helpCenterComponent-parent">
        <div className="helpCenter-text">
          <div className="helpCenter-textbox">
            <h2>Need Help? Check<br />Out Our Help Center</h2>
            <p>
              I'm a paragraph. Click here to add your own text<br />and edit me. Let
              your users get to know you.
            </p>
            <button type="button" className="helpCenter-btn">Go to Help Center</button>
          </div>
        </div>
        <div className="helpCenter-image">
          <img src={bgImage} alt="bgImage" srcset="" />
        </div>
      </div>
    </div>
  );
};

export default HelpCenterComponent;
