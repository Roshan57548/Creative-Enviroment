import React from "react";
import "./Style/Banner.css";
import image from "../Images/banner_image4.jpg";
import { Divider } from "@mui/material";

const Banner = (props) => {
  return (
    <div className="main-container container-fluid">
      <div className="img-container col-lg-12 col-md-12">
        <div className="blue-overlay"></div>
        <img src={image} alt="construction" />
      </div>
      <div className="row text-container">
        <div className="text-container-content">
          <h1>{props.data.Heading} </h1>
          <Divider />
        </div>
        <div className="text-container-description">
          <h6>{props.data.Description}</h6>
          <Divider />
        </div>
      </div>
    </div>
  );
  ``;
};
export default Banner;
