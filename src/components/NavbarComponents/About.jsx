import React from "react";
import "./AboutStyles.css";
import aboutImage from "./../../images/aboutPageImg.png";

const About = () => {
  return (
    <div>
      <div className="about-heading">
        <h1>About TechShed</h1>
      </div>
      <hr style={{ width: "106.5rem", margin: "0px auto" }} />
      <div className="about-image-text">
        <div className="aboutImage">
          <img src={aboutImage} alt="aboutImage" />
        </div>
        <div className="aboutText">
          <p className="about-para">
            <span>
              I'm a paragraph. Click here to add your own text and edit me. It&#39;s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.<br />Feel free to drag and drop me anywhere you like on your page. I&#39;m a great place for you to tell a story and let your users know a little more about you.
            </span>
            <br />
            <br />
            <span>
              This is a great space to write a long text about your company and your services. You can use this space to go into a little more
              detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with
              the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.
            </span>
          </p>
        </div>
      </div>
      <hr
        style={{ width: "106.5rem", margin: "0px auto", marginBottom: "20px" }}
      />
    </div>
  );
};

export default About;
