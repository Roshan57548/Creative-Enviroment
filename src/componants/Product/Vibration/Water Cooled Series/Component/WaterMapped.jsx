import React from "react";
// import "./Style/Electrodynamic.css";
// import { Link } from "react-router-dom";
import './Style/waterMapped.css'
const WaterMappedImage = (props) => {
  return (
    <>
      <div className="container Water-cooled-container">
        <div className="row">
          <div className="col-md-12 ">
            <h3 className="heading-text">{props.data.Heading2}</h3>
          </div>
          {props.data.Image.map((logo, index) => {
            return (
              <div className="col-md-3 col-sm-6 col-lg-3 map-img-container image-link-container" key={index}>
                  {logo.img}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default WaterMappedImage;
