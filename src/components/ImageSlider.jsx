import React, { useEffect } from 'react'
import { useState } from 'react';
import "./../styles/ImageSliderStyles.css"
import image1 from "./../images/BgImg1.png";
import image2 from "./../images/BgImg2.png";
import image3 from "./../images/BgImg3.png";

const ImageSlider = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [image1, image2, image3];
    
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);
    
        return () => clearInterval(interval); // Cleanup on component unmount
    }, [images.length]); // Dependency array includes images.length
    
  return (
    <div className="slider-parent">
      <div className="slider">
      {/* {images.map((image, index) => (
        <div
          key={index}
          className={`slide ${index === currentIndex ? "active" : ""}`}
        >
          <img src={image} alt={`Image ${index + 1}`} />
          <div className="caption">{image.caption}</div>
        </div>
      ))} */}

        <img src={image1} alt="img1" />
      </div>
      <div className="imageText">
        <p className="badgeText">Best Prices</p>
        <p className="text1">Incredible Prices on All Your Favorite Items</p>
        <p className="text2">Get more for less on selected brands</p>
        <button className='btn-shopNow'>Shop Now</button>
      </div>
    </div>
  )
}

export default ImageSlider
