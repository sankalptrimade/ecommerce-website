import React from 'react';
import "./TermsAndConditionsStyling.css";

const TermsAndConditionsComponent = () => {
  return (
    <div>
      <div className="termsConditions-heading">
        <h1>Terms &#38; Conditions</h1>
      </div>
      <hr style={{ width: "106.5rem", margin: "0px auto" }} />
      <div className="terms-conditions-details-box">
        <div className="customer-policy details-box">
            <h3>Customer Care</h3>
            <p>I&#39;m a Customer Care section. I&#39;m a great place to write a long text about your company and your services, and, most importantly, how to contact your store with queries. Writing a detailed Customer Care policy is a great way to build trust and reassure your customers that they can buy with confidence.
            </p>
            <br />
            <p>I'm the second paragraph in your Customer Care section. Click here to add your own text and edit me. It&#39;s easy. Just click “Edit Text” or double click me to add details about your policy and make changes to the font. I&#39;m a great place for you to tell a story and let your users know a little more about you.
            </p>
        </div>
        <div className="privacy-policy details-box">
            <h3>Privacy &#38; Safety</h3>
            <p>I&#39;m a Privacy & Safety policy section. I&#39;m a great place to inform your customers about how you use, store, and protect their personal information. Add details such as how you use third-party banking to verify payment, the way you collect data or when will you contact users after their purchase was completed successfully. </p>
            <br />
            <p>Your user&#39;s privacy is of the highest importance to your business, so take the time to write an accurate and detailed policy. Use straightforward language to gain their trust and make sure they keep coming back to your site!</p>
        </div>
        <div className="inquiry-policy details-box">
            <h3>Wholesale Inquiries</h3>
            <p>I&#39;m a wholesale inquiries section. I&#39;m a great place to inform other retailers about how they can sell your stunning products. Use plain language and give as much information as possible in order to promote your business and take it to the next level!</p>
            <br />
            <p>I'm the second paragraph in your Wholesale Inquiries section. Click here to add your own text and edit me. It&#39;s easy. Just click “Edit Text” or double click me to add details about your policy and make changes to the font. I&#39;m a great place for you to tell a story and let your users know a little more about you.</p>
        </div>
        <div className="payment-policy">
            <h3>Payment Methods</h3>
            <p>&#8208; Credit &#8208; Debit Cards</p>
            <p>&#8208; PAYPAL</p>
            <p>&#8208; Offline Payments</p>
        </div>
      </div>
    </div>
  )
}

export default TermsAndConditionsComponent
