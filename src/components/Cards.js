import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";
import img1 from "../images/img-1.png"


function Cards() {
  return (
    <div className="cards">
      <h1>Bunlara Göz At!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={img1}
              text="Makale 1"
              label="Makale"
              path="/services"
            />
            <CardItem
              src={img1}
              text="Makale 2"
              label="Makale"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={img1}
              text="Makale 3"
              label="Makale"
              path="/services"
            />
            <CardItem
              src={img1}
              text="Makale 4"
              label="Makale"
              path="/products"
            />
            <CardItem
              src={img1}
              text="Makale 5"
              label="Makale"
              path="/iletisim"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
