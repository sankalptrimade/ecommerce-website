import React from "react";
import "./../styles/ShopCategoryListStyles.css";
import mobile from "./../images/mobileImg.png";
import laptop from "./../images/laptopImg.png";
import tablet from "./../images/tabletImg.png";
import bgImg from "./../images/BgImg4.png";

const ShopCategoryList = () => {
  return (
    <div>
      <div className="category-parent">
        <div className="heading-text">
          <p className="text-center">Shop by Category</p>
        </div>
        <div className="category">
          <div className="category-list d-flex align-items-center justify-content-center">
            <div className="category-list-items">
              <img src={mobile} alt="mobileImg" />
            </div>
            <p>Mobiles</p>
          </div>
          <div className="category-list d-flex align-items-center justify-content-center">
            <div className="category-list-items">
              <img src={laptop} alt="laptopImg" />
            </div>
            <p>Laptops</p>
          </div>
          <div className="category-list d-flex align-items-center justify-content-center">
            <div className="category-list-items">
              <img src={tablet} alt="tabletImg" />
            </div>
            <p>Tablets</p>
          </div>
        </div>
        <div className="bgImg">
          <img src={bgImg} alt="Background_Image" />
          <div className="bgImg-text d-flex align-items-center justify-content-center">
            <div className="image-text">
              <p className="text-1">Save up to </p>
              <p className="text-2">&#36;150 </p>
              <p className="text-3">on selected laptop &#38; tablets brands</p>
              <p className="text-4">Terms and condition apply</p>
              <button type="submit" className="shop-btn">
                Shop
              </button>
            </div>
          </div>
          <p className="rounded-text d-flex align-items-center justify-content-center">
            Best Price
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShopCategoryList;
