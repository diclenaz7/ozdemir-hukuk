import React from "react";
import { Link } from "react-router-dom";

function CardItem(props) {
  return (
    <>
      <li className="cards__item">
        <Link className="cards__item__link" to={props.path}>
          <figure className="cards__item__pic-wrap" data-category={props.label}>
            <img
              className="cards__item__img"
              alt="Travel Image"
              src={props.src}
            />
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{props.text}</h5>
          </div>
          {props.text2 && (
            <div className="cards__item__info__2">
              <h5 className="cards__item__text__2">{props.text2}</h5>
            </div>
          )}
        </Link>
      </li>
    </>
  );
}

export default CardItem;
