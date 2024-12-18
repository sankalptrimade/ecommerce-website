import React from "react";
import { LiaShippingFastSolid } from "react-icons/lia";
import "./../styles/NavbarStyles.css";

const Navbar = () => {
  return (
    <nav>
      <div className="navbar-child-1 d-flex justify-content-between">
        <div className="navbar-child-2 d-flex" style={{ margin: "0.5rem 0rem" }}>
          <div className="boxIcon" style={{ marginRight: "18px" }}>
            <LiaShippingFastSolid />
          </div>
          
          Free Shipping for orders over &#36;50
        </div>
        <div className="navbar">
          <ul className="navbar-list d-flex justify-content-between">
            <li className="navbar-list-items link-underline link-underline-opacity-75">
              {" "}
              <a href="#"> About</a>
            </li>
            <li className="navbar-list-items link-underline link-underline-opacity-75">
              {" "}
              <a href="#"> Contact</a>
            </li>
            <li className="navbar-list-items link-underline link-underline-opacity-75">
              {" "}
              <a href="#"> Help Center</a>
            </li>
            <li className="navbar-list-items">
              <a href="#">
                {" "}
                <span className="link-underline link-underline-opacity-0">
                  Call Us
                </span>
                <span className="link-underline link-underline-opacity-75">
                  123-456-7890
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
