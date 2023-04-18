import React from "react";
import "./Style/OurVision.css";
import Logo from "../Images/ourVision_image.png";

const OurVision = (props) => {
  return (
    <div className="container">
      <div className="container-fluid">
        <div className="heading">
          <div className="image-wrapper">
            <img src={Logo} alt="logo" />
          </div>
          <h2>{props.data.Heading}</h2>
          <hr />
          <div className="description">
            <ul>
              <li>{props.data.Description[0].message1}</li>
              <li>{props.data.Description[0].message2}</li>
              <li>{props.data.Description[0].message3}</li>
              <li>{props.data.Description[0].message4}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurVision;
