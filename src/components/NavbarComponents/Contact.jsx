import React from "react";
import "./Contact.css";
import NewsletterComponent from "./../NewsletterComponent";

const Contact = () => {
  return (
    <div>
      <div className="contact-heading">
        <h1>Get in Touch</h1>
      </div>
      <hr style={{ width: "106.5rem", margin: "0px auto" }} />
      <div className="outterBox-parent">
        <div className="detailsBox">
          <div className="storeDetailsBox">
            <div className="storeDetails-InnerBox">
              <div className="timingsBox">
                <h6>Opening Hours</h6>
                <ul className="timings-list">
                  <li className="timings-list-items">Mon - Fri: 8am - 8pm</li>
                  <li className="timings-list-items">Saturday: 9am - 7pm</li>
                  <li className="timings-list-items">Sunday: 9am - 8pm</li>
                </ul>
              </div>
              <div className="locationBox">
                <h6>Store Location</h6>
                <p className="storeLocation-text">
                  500 Terry Francine Street
                  <br />
                  San Francisco, CA 94158
                  <br />
                  info@mysite.com <br />
                  123-456-7890
                </p>
              </div>
            </div>
          </div>
          <div className="helpFormBox">
            <div className="helpForm-InnerBox">
              <h6>We're here to help&#33;</h6>
              <p className="storeLocation-text">
                Fill out the form with any query on your mind and we'll
                <br />
                get back to you as soon as possible
              </p>
              <div className="userDetailsHelpForm">
                <form>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputFirstName"
                      className="form-label help-form-label"
                    >
                      First Name<span style={{ color: "black" }}>*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control help-form-input"
                      id="exampleInputFirstName"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputLastName"
                      className="form-label help-form-label"
                    >
                      Last Name<span style={{ color: "black" }}>*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control help-form-input"
                      id="exampleInputLastName"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputEmail1"
                      className="form-label help-form-label"
                    >
                      Email<span style={{ color: "black" }}>*</span>
                    </label>
                    <input
                      type="email"
                      className="form-control help-form-input"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputPhoneNumber"
                      className="form-label help-form-label"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      className="form-control help-form-input"
                      id="exampleInputPhoneNumber"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="mb-3">
                    <textarea
                      placeholder="Comments..."
                      className="form-control help-form-input textarea-input"
                      rows="6"
                      cols="100"
                    ></textarea>
                  </div>
                  <button type="submit" className="btn-helpForm">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <NewsletterComponent />
      </div>
    </div>
  );
};

export default Contact;
