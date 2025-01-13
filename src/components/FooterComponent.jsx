// import React from 'react'
// import "./../styles/FooterComponentStyles.css";
// import { FaFacebookF } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa";
// import { FaYoutube } from "react-icons/fa";
// import visa from "./../images/Visa.png";
// import masterCard from "./../images/mastercard.png";
// import americanExpress from "./../images/americanexpress.png";
// import unionyPay from "./../images/chinaunionpay.png";
// import jcbCard from "./../images/jcbcard.png";
// import dinersCard from "./../images/Diners.png";
// import discoverCard from "./../images/Discover.png";
// import paypalCard from "./../images/PayPal.png";
// import { Link } from 'react-router-dom';

// const FooterComponent = () => {
//   return (
//     <div className="footer">
//       <div className="footer-parent">
//         <div className="storeLocation">
//             <h6 className="footer-heading">Store Location</h6>
//             <p className="storeLocation-text">
//             500 Terry Francine Street<br />San Francisco, CA 94158<br />info@mysite.com <br />123-456-7890
//             </p>
//             <div className="socialmedia-icons">
//                 <Link to="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebookF style={{ fontSize: "17px", color: "black" }}/></Link>
//                 <Link to="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram style={{ fontSize: "17px", color: "black" }}/></Link>
//                 <Link to="https://x.com/" target="_blank" rel="noopener noreferrer"><FaTwitter style={{ fontSize: "17px", color: "black" }}/></Link>
//                 <Link to="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"><FaYoutube style={{ fontSize: "17px", color: "black" }}/></Link>
//             </div>
//         </div>
//         <div className="customerSupport">
//         <h6 className="footer-heading">Customer Support</h6>
//             <ul className="customerSupport-list">
//                 <li className="customerSupport-list-items"><Link to="/" target="_blank" rel="noopener noreferrer">Contact us</Link></li>
//                 <li className="customerSupport-list-items"><Link to="/" target="_blank" rel="noopener noreferrer">Help Center</Link></li>
//                 <li className="customerSupport-list-items"><Link to="/" target="_blank" rel="noopener noreferrer">About Us</Link></li>
//                 <li className="customerSupport-list-items"><Link to="/" target="_blank" rel="noopener noreferrer">Carrers</Link></li>
//             </ul>
//         </div>
//         <div className="Policy">
//         <h6 className="footer-heading">Policy</h6>
//         <ul className="policy-list">
//                 <li className="policy-list-items"><Link to="/" target="_blank" rel="noopener noreferrer">Shipping &#38; Returns</Link></li>
//                 <li className="policy-list-items"><Link to="/" target="_blank" rel="noopener noreferrer">Terms &#38; Conditions</Link></li>
//                 <li className="policy-list-items"><Link to="/" target="_blank" rel="noopener noreferrer">Payments Methods</Link></li>
//                 <li className="policy-list-items"><Link to="/helpCenter" rel="noopener noreferrer">FAQ</Link></li>
//             </ul>
//         </div>

//       </div>
//       <hr style={{ width:"106.5rem", margin:"0px auto" }}/>
//       <div className="payment-method">
//         <div className="payment-method-text">
//             <p>We accept the following paying methods</p>
//         </div>
//         <div className="card-payment">
//             <img src={visa} alt="visa"/>
//             <img src={masterCard} alt="masterCard"/>
//             <img src={americanExpress} alt="americanExpress"/>
//             <img src={unionyPay} alt="unionyPay"/>
//             <img src={jcbCard} alt="jcbCard"/>
//             <img src={dinersCard} alt="dinersCard"/>
//             <img src={discoverCard} alt="discoverCard"/>
//             <img src={paypalCard} alt="paypalCard"/>
//         </div>
//       </div>
//       <p className='copyright-text'>&copy; 2025 All rights reserved.</p>
//     </div>
//   )
// }

// export default FooterComponent

import React from "react";
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
import { Link } from "react-router-dom";


const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// const scrollTomid = () => {
//   window.scrollTo({ block: "center", behavior: 'smooth' });
// };
const scrollToMid = () => {
  const element = document.getElementById('careers-section');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
};


const FooterComponent = () => {
  return (
    <div className="footer">
      <div className="footer-parent">
        <div className="storeLocation">
          <h6 className="footer-heading">Store Location</h6>
          <p className="storeLocation-text">
            500 Terry Francine Street
            <br />
            San Francisco, CA 94158
            <br />
            info@mysite.com <br />
            123-456-7890
          </p>
          <div className="socialmedia-icons">
            <Link
              to="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF style={{ fontSize: "17px", color: "black" }} />
            </Link>
            <Link
              to="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram style={{ fontSize: "17px", color: "black" }} />
            </Link>
            <Link to="https://x.com/" target="_blank" rel="noopener noreferrer">
              <FaTwitter style={{ fontSize: "17px", color: "black" }} />
            </Link>
            <Link
              to="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube style={{ fontSize: "17px", color: "black" }} />
            </Link>
          </div>
        </div>
        <div className="customerSupport">
          <h6 className="footer-heading">Customer Support</h6>
          <ul className="customerSupport-list">
            <li className="customerSupport-list-items">
              <Link to="/contact" onClick={scrollToTop}>
                Contact us
              </Link>
            </li>
            <li className="customerSupport-list-items">
              <Link to="/helpCenter" onClick={scrollToTop}>
                Help Center
              </Link>
            </li>
            <li className="customerSupport-list-items">
              <Link to="/about" onClick={scrollToTop}>
                About Us
              </Link>
            </li>
            <li className="customerSupport-list-items" id="careers-section">
              <Link to="/about" onClick={scrollToMid}>
                Careers
              </Link>
            </li>
          </ul>
        </div>
        <div className="Policy">
          <h6 className="footer-heading">Policy</h6>
          <ul className="policy-list">
            <li className="policy-list-items">
              <Link to="/shippingAndReturns" onClick={scrollToTop}>
                Shipping &#38; Returns
              </Link>
            </li>
            <li className="policy-list-items">
              <Link to="/termsAndConditions" onClick={scrollToTop}>
                Terms &#38; Conditions
              </Link>
            </li>
            <li className="policy-list-items">
              <Link to="/" onClick={scrollToTop}>
                Payments Methods
              </Link>
            </li>
            <li className="policy-list-items">
              <Link to="/helpCenter" onClick={scrollToTop}>
                FAQ
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <hr style={{ width: "106.5rem", margin: "0px auto" }} />
      <div className="payment-method">
        <div className="payment-method-text">
          <p>We accept the following paying methods</p>
        </div>
        <div className="card-payment">
          <img src={visa} alt="visa" />
          <img src={masterCard} alt="masterCard" />
          <img src={americanExpress} alt="americanExpress" />
          <img src={unionyPay} alt="unionyPay" />
          <img src={jcbCard} alt="jcbCard" />
          <img src={dinersCard} alt="dinersCard" />
          <img src={discoverCard} alt="discoverCard" />
          <img src={paypalCard} alt="paypalCard" />
        </div>
      </div>
      <p className="copyright-text">&copy; 2025 All rights reserved.</p>
    </div>
  );
};

export default FooterComponent;
