import React from 'react'
import "./../styles/FooterComponentStyles.css";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import visa from "./../images/Visa.png";
import masterCard from "./../images/mastercard.png";
import americanExpress from "./../images/americanexpress.png";
import unionyPay from "./../images/chinaunionpay.png";
import jcbCard from "./../images/jcbcard.png";
import dinersCard from "./../images/Diners.png";
import discoverCard from "./../images/Discover.png";
import paypalCard from "./../images/PayPal.png";

const FooterComponent = () => {
  return (
    <div className="footer">
      <div className="footer-parent">
        <div className="storeLocation">
            <h6 className="footer-heading">Store Location</h6>
            <p className="storeLocation-text">
            500 Terry Francine Street<br />San Francisco, CA 94158<br />info@mysite.com <br />123-456-7890
            </p>
            <div className="socialmedia-icons">
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebookF style={{ fontSize: "17px", color: "black" }}/></a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram style={{ fontSize: "17px", color: "black" }}/></a>
                <a href="https://x.com/" target="_blank" rel="noopener noreferrer"><FaTwitter style={{ fontSize: "17px", color: "black" }}/></a>
                <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"><FaYoutube style={{ fontSize: "17px", color: "black" }}/></a>
            </div>
        </div>
        <div className="customerSupport">
        <h6 className="footer-heading">Customer Support</h6>
            <ul className="customerSupport-list">
                <li className="customerSupport-list-items"><a href="http://" target="_blank" rel="noopener noreferrer">Contact us</a></li>
                <li className="customerSupport-list-items"><a href="http://" target="_blank" rel="noopener noreferrer">Help Center</a></li>
                <li className="customerSupport-list-items"><a href="http://" target="_blank" rel="noopener noreferrer">About Us</a></li>
                <li className="customerSupport-list-items"><a href="http://" target="_blank" rel="noopener noreferrer">Carrers</a></li>
            </ul>
        </div>
        <div className="Policy">
        <h6 className="footer-heading">Policy</h6>
        <ul className="policy-list">
                <li className="policy-list-items"><a href="http://" target="_blank" rel="noopener noreferrer">Shipping &#38; Returns</a></li>
                <li className="policy-list-items"><a href="http://" target="_blank" rel="noopener noreferrer">Terms &#38; Conditions</a></li>
                <li className="policy-list-items"><a href="http://" target="_blank" rel="noopener noreferrer">Payments Methods</a></li>
                <li className="policy-list-items"><a href="http://" target="_blank" rel="noopener noreferrer">FAQ</a></li>
            </ul>
        </div>
        
      </div>
      <hr style={{ width:"106.5rem", margin:"0px auto" }}/>
      <div className="payment-method">
        <div className="payment-method-text">
            <p>We accept the following paying methods</p>
        </div>
        <div className="card-payment">
            <img src={visa} alt="visa"/>
            <img src={masterCard} alt="masterCard"/>
            <img src={americanExpress} alt="americanExpress"/>
            <img src={unionyPay} alt="unionyPay"/>
            <img src={jcbCard} alt="jcbCard"/>
            <img src={dinersCard} alt="dinersCard"/>
            <img src={discoverCard} alt="discoverCard"/>
            <img src={paypalCard} alt="paypalCard"/>
        </div>
      </div>
      <p className='copyright-text'>&copy; 2025 All rights reserved.</p>
    </div>
  )
}

export default FooterComponent
