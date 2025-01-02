import React from "react";
import "./../styles/ProductDetailsStyles.css";
import InfoImage from "./InfoImage";
import ServiceProvided from "./ServiceProvided";
import ShopCategoryList from "./ShopCategoryList";

const ProductDetails = () => {
  return (
    <div className="parent">
      <div className="cardsImage">
        <InfoImage />
      </div>
      <div className="serviceProvideList">
        <ServiceProvided />
      </div>
      <div className="categoryShoppingList">
        <ShopCategoryList />
      </div>
    </div>
  );
};

export default ProductDetails;
