import React from "react";
import "./../styles/ShopCategoryListStyles.css";
import mobile from './../images/mobileImg.png'
import laptop from './../images/laptopImg.png'
import tablet from './../images/tabletImg.png'


const ShopCategoryList = () => {
  return (
    <div>
      <div className="category-parent">
        <div className="heading-text">
          <p className="text-center">Shop by Category</p>
        </div>
        <div className="category">
          <div className="category-list d-flex align-items-center justify-content-center">
            <div className="category-list-items"><img src={mobile} alt="mobileImg" /></div>
            <p>Mobiles</p>
          </div>
          <div className="category-list d-flex align-items-center justify-content-center">
          <div className="category-list-items"><img src={laptop} alt="laptopImg" /></div>
          <p>Laptops</p>
          </div>
          <div className="category-list d-flex align-items-center justify-content-center">
          <div className="category-list-items"><img src={tablet} alt="tabletImg" /></div>
          <p>Tablets</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopCategoryList;
