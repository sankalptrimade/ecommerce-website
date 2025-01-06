import React from "react";
import "./../styles/ProductDetailsStyles.css";
import InfoImage from "./InfoImage";
import ServiceProvided from "./ServiceProvided";
import ShopCategoryList from "./ShopCategoryList";
import ComingSoonComponent from "./ComingSoonComponent";
import BrandsComponent from "./BrandsComponent";


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
      <div className="ComingSoonPage">
        <ComingSoonComponent />
      </div>
      <div className="brandsPage">
        <BrandsComponent />
      </div>
    </div>
  );
};

export default ProductDetails;




