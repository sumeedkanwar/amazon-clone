import React from "react";
import "./Home.css";
import home_image from "./images/home_image.jpg";
import headphone from "./images/headphones.jpg";
import keyboard from "./images/keyboard.jpg";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img src={home_image} alt="" className="home__image" />

        <div className="home__row">
          <Product
            title="Razer BlackShark"
            price={49.99}
            image={headphone}
            rating={4}
          />
          <Product
            title="Razer BlackWidow"
            price={169.99}
            image={keyboard}
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product />
          <Product />
          <Product />
        </div>

        <div className="home__row">
          <Product />
        </div>
      </div>
    </div>
  );
}

export default Home;
