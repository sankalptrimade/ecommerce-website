import React from "react";
import "./../styles/HeadingStyles.css";
import { IoIosSearch } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { GrFavorite } from "react-icons/gr";
import { BsCart2 } from "react-icons/bs";

const Heading = () => {
  return (
    <div>
      <div className="title-parent d-flex">
        <div className="title-child-1 d-flex">
          <div className="title">
            <p>TechShed</p>
          </div>
          <div className="search-container">
            <input
              type="text"
              className="search-input"
              placeholder="Search..."
            />
            <button className="search-button">
              <IoIosSearch />
            </button>
          </div>
        </div>
        <div className="title-child-2">
          <div className="users">
            <p>
              <a className="userslist" href="/">
                <span className="login-logo">
                  <FaUserCircle />
                </span>
                <span className="login-span">Log In</span>
              </a>
            </p>
            <p>
              <a className="userslist" href="/">
                <span className="favorite-logo">
                  <GrFavorite />
                </span>
              </a>
            </p>
            <p>
              <a className="userslist" href="/">
                <span className="cart-logo">
                  <BsCart2 />
                </span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heading;
