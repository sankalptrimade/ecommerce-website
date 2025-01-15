import React from "react";
import "./ProductComponentStyling.css";

const ProductComponent = (props) => {
  return (
    <div>
      <div className="card" style={{width: "18rem", height: "40rem", marginBottom:"5rem", marginRight:"2rem", marginTop:"3rem" }}>
        <img src={props.image} className="card-img-top" alt="..." style={{width: "17.8rem", height: "20rem", objectFit: "contain"}} />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">
            {props.description}
          </p>
          <p className="card-text">
            Price: &#36; {props.price}
          </p>
          <a href="#" className="btn btn-primary">
            Buy Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductComponent;
