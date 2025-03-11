import React from "react";
import "./Hero.css";
const Hero = (props) => {
  return (
    <>
      <div className="hero-container" style={{ flexDirection: props.direction?props.direction:"row-reverse" }}>
        <div className="hero-content">
          <h1>{props.heading}</h1>
          <p>
            {props.descrip}
          </p>
          <button>Shop`Now`</button>
        </div>
        <div className="image-content">
          <img
            src={props.img}
            alt={props.heading}
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
