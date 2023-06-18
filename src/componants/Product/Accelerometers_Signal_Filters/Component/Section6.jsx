import React from "react";
import "./Style/Section6.css";
import Image from "./Image/section6.png";
import { Link } from "react-router-dom";

const Section6 = (props) => {
  return (
    <div className="sect_container">
      <div className="sect_bgcolor">
        <div className="sect_wrapper">
          <div className="sect_image">
            <img className="sect_img" src={Image} alt="" />
          </div>
          <div className="sect_textarea">
            <h1 className="sect-heading">{props.data.Heading}</h1>
            <p>{props.data.Para}</p>
            <div className="first-link">
              <h5 className="button_link">
                To know more about Accessories please click the below link
              </h5>
              <Link
               
                to="https://kemo.com/accelerometer-mounting-studs-accessories/"
                target="_blank"
              >
                <button className="sect_btn "> Click Here</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section6;
