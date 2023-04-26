import React from "react";
import data from "../Content/StateOfCity";
import "./Style/StateOfCity.css";

const StateOfCity = (props) => {
  return (
    <div className="container about-content-0">
      <div className="row">
        <div className="col-lg-6 creactive-env-img-body">{data.Image}</div>
        <div className="col-lg-6 content-1">
          <div className="mt-5">
            <h4 className="content-2">{data.Heading}</h4>
            <h2 className="content-3">{data.Sub_heading}</h2>
            <div className="underline"></div>
            <p className="content-4">{data.para[0].para1}</p>
            <strong className="content-5">{data.para[0].para2}</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StateOfCity;
