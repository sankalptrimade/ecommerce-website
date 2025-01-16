import React, { useState, useEffect } from "react";
import "./ProductDetailsStyling.css";
import { useParams } from "react-router-dom";

const ProductDetailsComponent = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const getSingleProductDetails = async () => {
    try {
      const url = `https://dummyjson.com/products/${id}`;
      const response = await fetch(url);
      const parsedData = await response.json();
      setProduct(parsedData);
      console.log(parsedData);
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  useEffect(() => {
    getSingleProductDetails();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="showProductDetailsComponent-parent d-flex align-items-center">
      <div className="showProducts-child container">
  <div className="product-details-container">
    <div className="product-img">
      {product.images?.length > 0 ? (
        <img
          src={product.images[0]}
          alt={product.title}
          className="product-image"
          style={{width:"500px", height:"500px", objectFit:"contain"}}
        />
      ) : (
        <div className="no-image">No Image Available</div>
      )}
    </div>
    <div className="product-info">
      <h1 className="product-title">{product.title}</h1>
      <p className="product-brand">Brand: <span>{product.brand}</span></p>
      <p className="product-price">Price: &#36;{product.price}</p>
      <p className="product-availability">
        Availability: <span>{product.availabilityStatus}</span>
      </p>
      <p className="product-description">{product.description}</p>
      <div className="quantity-container">
        <label htmlFor="quantityInput" className="quantity-label">
          Quantity
        </label>
        <input
          type="number"
          className="quantity-input"
          id="quantityInput"
          value={quantity}
          onChange={handleQuantityChange}
          min={product.minimumOrderQuantity || 1}
        />
      </div>
      <button className="btn-add-to-cart">Buy Now</button>
    </div>
  </div>
</div>

      </div>
    </div>
  );
};

export default ProductDetailsComponent;
