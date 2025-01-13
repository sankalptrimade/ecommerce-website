import React, { useState } from "react";
import "./HelpCenterStyles.css";

const HelpCenter = () => {
  const [activeTab, setActiveTab] = useState("general"); 

  return (
    <div className="accordion-component">
      <div className="helpCenter-heading">
        <h1>TechShed Help Center</h1>
        <p>Frequently asked questions</p>
      </div>
      <div className="accordionParent container">
        <div className="accordion-optionset">
          <ul className="optionset-list">
            <li
              className={`optionset-list-items ${
                activeTab === "general" ? "active-tab" : ""
              }`}
              onClick={() => setActiveTab("general")}
            >
              General
            </li>
            <li
              className={`optionset-list-items ${
                activeTab === "faqs" ? "active-tab" : ""
              }`}
              onClick={() => setActiveTab("faqs")}
            >
              Setting up FAQs
            </li>
          </ul>
        </div>
        {activeTab === "general" && (
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  What is an FAQ section?
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  An FAQ section can be used to quickly answer common questions
                  about your business like "Where do you ship to?", "What are
                  your opening hours?", or "How can I book a service?".
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Why do FAQs matter?
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  FAQs are a great way to help site visitors find quick answers
                  to common questions about your business and create a better
                  navigation experience.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Where can I add my FAQs?
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  FAQs can be added to any page on your site or to your Wix
                  mobile app, giving access to members on the go.
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "faqs" && (
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  How do I add a new question & answer?
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p className="p1-faq1">
                    To add a new FAQ follow these steps:
                  </p>
                  <ol className="ul-faq1-list">
                    <li className="li-faq1-list-items">
                      Manage FAQs from your site dashboard or in the Editor
                    </li>
                    <li className="li-faq1-list-items">
                      Add a new question & answer
                    </li>
                    <li className="li-faq1-list-items">
                      Assign your FAQ to a category
                    </li>
                    <li className="li-faq1-list-items">Save and publish.</li>
                  </ol>
                  <p className="p2-faq1">
                    You can always come back and edit your FAQs.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Can I insert an image, video, or GIF in my FAQ?
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p className="p1-faq2">
                    Yes. To add media follow these steps:
                  </p>
                  <ol className="ul-faq2-list">
                    <li className="li-faq2-list-items">
                      Manage FAQs from your site dashboard or in the Editor
                    </li>
                    <li className="li-faq2-list-items">
                      Create a new FAQ or edit an existing one
                    </li>
                    <li className="li-faq2-list-items">
                      From the answer text box click on the video, image or GIF
                      icon
                    </li>
                    <li className="li-faq2-list-items">
                      Add media from your library and save.
                    </li>
                  </ol>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  How do I edit or remove the 'Frequently Asked Questions'
                  title?
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  You can edit the title from the FAQ 'Settings' tab in the
                  Editor. <br />
                  To remove the title from your mobile app go to the 'Site &
                  App' tab in your Owner's app and customize.
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HelpCenter;
