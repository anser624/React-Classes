import React from "react";
import "./Card.css";
const Card = (props) => {
  return (
    <div className="card-container">
      <div className="card">
        <img
          src={props.src}
          alt={props.heading}
        />
        <div className="card-content">
          <h1>{props.heading}</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            dignissimos delectus libero consectetur? Beatae, temporibus!
          </p>
          <button>Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
