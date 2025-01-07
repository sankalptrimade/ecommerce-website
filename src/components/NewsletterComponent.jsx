import React from "react";
import "./../styles/NewsletterComponentStyles.css";

const NewsletterComponent = () => {
  return (
    <div>
      <div className="newslettercomponent-parent">
        <div className="newsletter-heading">
            <h3>Newsletter</h3>
            <p>Sign up to receive updates on new arrivals and special offers</p>
        </div>
        <div className="newsletterform">
          <form>
            <div  className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label email-text">
                Email
              </label>
              <input
                type="email"
                className="form-control email-text-input email"
                id="email exampleInputEmail1"
                aria-describedby="emailHelp"
                required
              />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Yes, subscribe me to your newsletter.
              </label>
            </div>
            <button type="submit" className="btn-subscribe">Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewsletterComponent;
