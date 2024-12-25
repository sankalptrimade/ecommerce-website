import React from "react";
import "./../styles/ProductDetailsStyles.css"
import InfoImage from "./InfoImage";

const ProductDetails = () => {
  return (
    <div className="parent">
      <div className="cardsImage">
        <InfoImage />
      </div>
    </div>
  );
};

export default ProductDetails;
