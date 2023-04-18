import React, { useRef, useState } from "react";
import "./Style/Carousel.css";

const Carousel = (props) => {
  return (
    <>
      <div className="carousel">
        <div className="carousel_1">
          <h4>{props.data.heading1}</h4>
          <h1>{props.data.heading2}</h1>
          <h1>{props.data.heading3}</h1>
          <p>
            {props.data.discription}
          </p>
          <button>Know More</button>

        </div>
        <div className="carousel_2">{props.data.image}</div>
      </div>
    </>
  );
};

export default Carousel;
