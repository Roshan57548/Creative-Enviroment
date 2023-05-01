import React from "react";
import "./Style/OurFounders.css";
import { Typography } from "@mui/material";

const OurFounders = (props) => {
  let cards;
  if (props.data.card) {
    cards = props.data.card.map((myData, index) => {
      return (
        <div className="OurFounders-image-content" key={index}>
          <img src={myData.image} alt="image1" />
          <div className="image-captions">
            <h5>{myData.name}</h5>
            <h6>{myData.position}</h6>
          </div>
        </div>
      );
    });
  }

  return (
    <div className="OurFounders-main-container">
      <div className="OurFounders-container">
        <div className="OurFounders-heading">
          <div>
            <Typography variant="h4">{props.data.Heading}</Typography>
            <hr />
            <Typography variant="subtitle1" className="OurFounders-sub-header">
              {props.data.Description[0].message1}
            </Typography>
          </div>
        </div>
        {/* image section */}
        <div className="OurFounders-image-container">
          <div className="OurFounders-image-wrapper">{cards}</div>
        </div>
        <Typography
          variant="subtitle1"
          className="OurFounders-sub-header"
          style={{ textAlign: "center" }}
        >
          {props.data.Description[0].message2}
        </Typography>
      </div>
    </div>
  );
};

export default OurFounders;
