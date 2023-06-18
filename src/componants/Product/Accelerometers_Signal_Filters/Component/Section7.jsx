import React from "react";
import "./Style/Section7.css";
import { Link } from "react-router-dom";

const Section7 = (props) => {
  return (
    <div>
      <div className="section7">
        <div className="wrapper">
          <h2 className="section7-heading">{props.data.Heading}</h2>
          <p>{props.data.Para}</p>
          <h5 className="button_link">
            To know more about Calibration Services please click the below link 
          </h5>
          <Link
            to="https://kemo.com/instrumentation-calibration-services-signal-conditioning-and-filters/"
            target="_blank"
          >
            <button className="section7_btn"> Click Here</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Section7;
