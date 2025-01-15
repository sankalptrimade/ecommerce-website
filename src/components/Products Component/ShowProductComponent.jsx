import React, { useEffect, useState } from "react";
import "./ShowProductsStyling.css";
import BrowseComponent from "./BrowseComponent";
import ProductComponent from "./ProductComponent";
import LoadingBar from "react-top-loading-bar";
// import tablet from "./../../images/tabletImg.png";

const ShowProductComponent = (props) => {
  const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(0);
  const [progress, setProgress] = useState(0);

  const getProducts = async () => {
    setProgress(0);
    const url = `https://dummyjson.com/products/category/${props.category}`;
    setProgress(20);
    // setLoading(true);
    let data = await fetch(url);
    setProgress(40);
    let parsedData = await data.json();
    setProgress(60);
    console.log(parsedData);
    setProducts(parsedData.products);
    setProgress(80);
    setTotal(parsedData.total);
    // setProgress(90);
    // setLoading(false);
    setProgress(100);
  };

  useEffect(() => {
    getProducts();
  }, [props.category]);

  return (
    <div>
      <div className="showProducts-parent">
          
        <div className="browseComponent-child">
          <BrowseComponent />
          <LoadingBar color="#f11946" height={3} progress={progress} />
        </div>
        <div className="productHeading">
            <h1>{props.heading}</h1>
            <p>{total} products</p>
          </div>
        <div className="productComponent-child container">
          {products.map((element) => (
            <ProductComponent
              key={element.id}
              title={element.title}
              description={element.description}
              price={element.price}
              image={element.images[0]}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShowProductComponent;
