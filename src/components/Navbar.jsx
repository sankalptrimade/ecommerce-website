import React from "react";
import { LiaShippingFastSolid } from "react-icons/lia";
import "./../styles/NavbarStyles.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="navbar-child-1 d-flex justify-content-between">
        <div
          className="navbar-child-2 d-flex"
          style={{ margin: "0.5rem 0rem" }}
        >
          <div className="boxIcon" style={{ marginRight: "18px" }}>
            <LiaShippingFastSolid />
          </div>
          Free Shipping for orders over &#36;50
        </div>
        <div className="navbar">
          <ul className="navbar-list d-flex justify-content-between">
            <li className="navbar-list-items link-underline link-underline-opacity-75">
              <Link to = "/"> Home</Link>
            </li>
            <li className="navbar-list-items link-underline link-underline-opacity-75">
              <Link to = "/about"> About</Link>
            </li>
            <li className="navbar-list-items link-underline link-underline-opacity-75">
              <Link to = "/contact"> Contact</Link>
            </li>
            <li className="navbar-list-items link-underline link-underline-opacity-75">
              <Link to = "/helpCenter"> Help Center</Link>
            </li>
            <li className="navbar-list-items">
              <Link to = "/callUs">
                <span className="link-underline link-underline-opacity-0">
                  Call Us
                </span>
                <span className="link-underline link-underline-opacity-75">
                  123-456-7890
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
