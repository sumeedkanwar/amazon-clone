import React from "react";
import "./Product.css";
import headphone from "./images/headphones.jpg";

function Product() {
  return (
    <div className="product">
      <div className="product__info">
        <p>Headphones</p>
        <p className="product__price">
          <small>$</small>
          <strong>19.99</strong>
        </p>
        <div className="product__rating">
          <p>⭐</p>
          <p>⭐</p>
          <p>⭐</p>
          <p>⭐</p>
        </div>
      </div>
      <img src={headphone} alt="headphones" />
      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
