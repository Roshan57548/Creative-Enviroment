import React from "react";
import "./Style/OurVision.css";
import Logo from "../Images/ourVision_image.png";

const OurVision = (props) => {
  return (
    <div className="OurVision-container">
      <div className="OurVision-container-fluid">
        <div className="OurVision-heading">
          <div className="OurVision-image-wrapper">
            <img src={Logo} alt="logo" />
          </div>
          <h2 className="OurVision-h2">{props.data.Heading}</h2>
          <hr />
          <div className="OurVision-description">
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
