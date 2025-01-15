import React from "react";
import "./BrowseComponentStyling.css";
import { Link } from "react-router-dom";

const BrowseComponent = () => {
  return (
    <div>
      <div className="browseComponent-parent">
        <div className="browse-heading">
        <h3>Browse by</h3>
        </div>
        <hr style={{width: "13.8rem", marginLeft:"35px"}}/>
        <div className="browseByCategory">
          <ul className="browseByCategory-list">
            <li className="browseByCategory-list-items">
              <Link to="/smartPhones">Mobile</Link>
            </li>
            <li className="browseByCategory-list-items">
              <Link to="/laptops">Laptop</Link>
            </li>
            <li className="browseByCategory-list-items">
              <Link to="/tablets">Tablets</Link>
            </li>
            <li className="browseByCategory-list-items">
              <Link to="/mobileAccessories">Accessories</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BrowseComponent;
