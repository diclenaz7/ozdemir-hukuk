import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Bunlara Göz At!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-1.png"
              text="Av. Beyhan Özdemir"
              text2="avbeyhanozdemir@gmail.com"
              label="Avukat"
              path="/services"
            />
            <CardItem
              src="images/img-2.jpg"
              text="Av. İncila Deniz"
              label="Avukat"
              path="/services"
            />
            <CardItem
              src="images/img-3.png"
              text="Person3"
              label="Ünvan"
              path="/services"
            />
            <CardItem
              src="images/img-3.png"
              text="Ünvan"
              label="Mystery"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
