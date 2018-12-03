import React from "react";

import "./Card.css";

const Card = props => {
  return (
    <div className="card">
      <span className="card__cost">
        Cost: {props.cost}
      </span>
      <p className="card__title">
        {props.title}
      </p>
      <div className="card__image">
        <img src={props.imgsrc} alt={props.title} />
      </div>
      <div className="card__description">
        <p>{props.description}</p>
      </div>
      <span className="card__value">
        Val: {props.value}
      </span>
    </div>
  );
};

export default Card;