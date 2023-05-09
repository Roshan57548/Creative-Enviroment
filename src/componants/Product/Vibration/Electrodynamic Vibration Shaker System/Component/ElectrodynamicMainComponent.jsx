import React from "react";
import "./Style/Electrodynamic.css";
import { Link } from "react-router-dom";

const ElectrodynamicMainComponent = (props) => {
  return (
    <>
      <div className="container Electro-dynamic-container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="heading-text">{props.data.Heading1}</h1>
            <p>
            {props.data.para}
            </p>
          </div>
        </div>
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

export default ElectrodynamicMainComponent;
