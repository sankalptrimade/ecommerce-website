import React from "react";
import "./ShippingAndReturnsStyling.css";

const ShippingAndReturnsComponent = () => {
  return (
    <div>
      <div className="shipping-heading">
        <h1>Shipping &#38; Returns</h1>
      </div>
      <hr style={{ width: "106.5rem", margin: "0px auto" }} />
      <div className="shipping-return-details-box">
        <div className="shipping-policy details-box">
            <h3>Shipping Policy</h3>
            <p>I&#39;m a Shipping Policy section. I&#39;m a great place to update your customers about your shipping methods, packaging and costs. Use plain, straightforward language to build trust and make sure that your customers stay loyal!
            </p>
            <br />
            <p>I'm the second paragraph in your Shipping Policy section. Click here to add your own text and edit me. It&#39;s easy. Just click “Edit Text” or double click me to add details about your policy and make changes to the font. I&#39;m a great place for you to tell a story and let your users know a little more about you.
            </p>
        </div>
        <div className="return-policy details-box">
            <h3>Return &#38; Exchange Policy</h3>
            <p>I&#39;m a return policy section. I&#39;m a great place to let your customers know what to do in case they&#39;ve changed their mind about their purchase, or if they&#39;re dissatisfied with a product. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence.</p>
            <br />
            <p>I'm the second paragraph in your Return &#38; Exchange policy. Click here to add your own text and edit me. It&#39;s easy. Just click “Edit Text” or double click me to add details about your policy and make changes to the font. I&#39;m a great place for you to tell a story and let your users know a little more about you.</p>
        </div>
      </div>
    </div>
  );
};

export default ShippingAndReturnsComponent;
