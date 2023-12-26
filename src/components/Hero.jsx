import React from "react";
import { Flipkart, Amazon, Shoe } from "../assets/index";

const Hero = () => {
  return (
    <main className="Hero container">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.</p>

        <div className="btn">
          <button className="shop-btn">Shop Now</button>
          <button className="category-btn">Category</button>
        </div>

        <div className="shop">
          <p>Also Available On</p>
          <div className="shop-img">
            <img src={Flipkart} alt="Flipkart" />
            <img src={Amazon} alt="Amazon" />
          </div>
        </div>
      </div>

      <div className="hero-image">
        <img src={Shoe} alt="Shoe" />
      </div>
    </main>
  );
};

export default Hero;
