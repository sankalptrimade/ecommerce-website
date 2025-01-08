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
              I'm a paragraph. Click here to add your own text and edit me.
              It&#39;s easy. Just click “Edit Text” or double click me to add
              your own content and make changes to the font.
              <br />
              Feel free to drag and drop me anywhere you like on your page.
              I&#39;m a great place for you to tell a story and let your users
              know a little more about you.
            </span>
            <br />
            <br />
            <span>
              This is a great space to write a long text about your company and
              your services. You can use this space to go into a little more
              detail about your company. Talk about your team and what services
              you provide. Tell your visitors the story of how you came up with
              the idea for your business and what makes you different from your
              competitors. Make your company stand out and show your visitors
              who you are.
            </span>
          </p>
        </div>
      </div>
      <hr style={{ width: "106.5rem", margin: "0px auto" }} />
      <div className="careers-form">
        <div className="careers-heading">
          <h1>Careers</h1>
          <p>Check out our job postings & opportunities waiting for you</p>
        </div>
        <div className="careers-form-parent">
          <div className="careersForm">
            <form>
              <div className="mb-3">
                <label
                  htmlFor="exampleInputFirstName"
                  className="form-label career-form-label"
                >
                  First Name<span style={{ color: "black" }}>*</span>
                </label>
                <input
                  type="text"
                  className="form-control career-form-input"
                  id="exampleInputFirstName"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleInputLastName"
                  className="form-label career-form-label"
                >
                  Last Name<span style={{ color: "black" }}>*</span>
                </label>
                <input
                  type="text"
                  className="form-control career-form-input"
                  id="exampleInputLastName"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleInputEmail1"
                  className="form-label career-form-label"
                >
                  Email address<span style={{ color: "black" }}>*</span>
                </label>
                <input
                  type="email"
                  className="form-control career-form-input"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleInputPhoneNumber"
                  className="form-label career-form-label"
                >
                  Phone Number
                </label>
                <input
                  type="number"
                  className="form-control career-form-input"
                  id="exampleInputPhoneNumber"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleInputPosition"
                  className="form-label career-form-label"
                >
                  Position You Apply for
                </label>
                <select
                  className="form-select career-form-label-optionset career-form-input-optionset"
                  aria-label="Default select example"
                >
                  <option>Select an option</option>
                  <option value="1">In-Store Sales</option>
                  <option value="2">Store Leadership</option>
                  <option value="3">In-Store Operations</option>
                  <option value="3">Warehouses & Logistics</option>
                  <option value="3">eCommerce</option>
                </select>
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleInputDate"
                  className="form-label career-form-label"
                >
                  Available Start Date<span style={{ color: "black" }}>*</span>
                </label>
                <input
                  type="date"
                  className="form-control career-form-input"
                  id="exampleInputDate"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleInputPhoneNumber"
                  className="form-label career-form-label"
                >
                  Link to Resume
                </label>
                <input
                  type="text"
                  className="form-control career-form-input resume-input"
                  id="exampleInputPhoneNumber"
                  aria-describedby="emailHelp"
                />
              </div>
              <button type="submit" className="btn-careersForm">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
