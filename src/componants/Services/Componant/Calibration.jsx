import { Typography } from "@mui/material";
import React from "react";
import "./Style/Calibration.css";
const Calibration = (props) => {
  return (
    <>
      <div className="Calibration">
        <div className="Calibration_1">
          <h2>{props.data.Heading}</h2>
        </div>
        <div className="Calibration_2">
          <div className="Calibration_2_box">
            <Typography className="Calibration_2_box_typography">
              {props.data.Content_1}
            </Typography>
          </div>
          <div className="Calibration_2_box">
            <Typography className="Calibration_2_box_typography">
             {props.data.Content_2}
            </Typography>
          </div>
          <div className="Calibration_2_box">
            <Typography className="Calibration_2_box_typography">
             {props.data.Content_3}
            </Typography>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calibration;
