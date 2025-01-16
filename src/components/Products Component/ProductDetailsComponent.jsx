import React, { useState, useEffect } from "react";
import "./ProductDetailsStyling.css";
import { useParams } from "react-router-dom";

const ProductDetailsComponent = () => {

    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const getSingleProductDetails = async() => {
        const url = `https://dummyjson.com/products/${id}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        setProduct(parsedData);
    }

    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (event) => {
      setQuantity(event.target.value);
    };

    useEffect(() => {
        getSingleProductDetails();
    }, [id])

  return (
    <div>
      <div className="showProductDetailsComponent-parent">
        <div className="product-img">
          <img src="" alt="" />
          <p>I'm a product description. This is a great place to "sell" your product and grab buyers' attention. Describe your product clearly and concisely. Use unique keywords. Write your own description instead of using manufacturers' copy.</p>
          <p>Product Description: {product.description}</p>
        </div>
        <div className="product-info">
          <h1>{product.title}</h1>
          <h6>SKU</h6>
          <h4>Price</h4>
          <div className="mb-3">
            <label htmlFor="quantityInput" className="form-label">
              Quantity
            </label>
            <input
              type="number"
              className="form-control"
              id="quantityInput"
              value={quantity}
              onChange={handleQuantityChange}
            />
          </div>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsComponent;
