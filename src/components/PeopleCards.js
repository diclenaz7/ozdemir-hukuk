import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";
import beyhan from "../images/beyhan.jpeg"
import metin from "../images/metin.jpeg"


function Cards() {
  return (
    <div className="cards">
      <h1>Bunlara Göz At!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={beyhan}
              text="Av. Beyhan Özdemir"
              text2="avbeyhanozdemir@gmail.com"
              label="Avukat"
              path="/services"
            />
            <CardItem
              src={metin}
              text="Av. Cevdet Metin Özdemir"
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
              text="Av. Deniz Kaşkaloğlu"
              label="Avukat"
              path="/services"
            />
            <CardItem
              src="images/img-3.png"
              text="Songül Öz"
              label="Asistan"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
