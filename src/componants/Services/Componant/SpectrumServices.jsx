import React from "react";
import "./Style/SpectrumServices.css";
import Typography from "@mui/material/Typography";
const SpectrumServices = (props) => {
  return (
    <>
      <div className="Spectrum">
        <div className="Spectrum_1">
          <img
            src={props.data.image}
            alt="ERROR"
          />
        </div>
        <div className="Spectrum_2">
          <h2>{props.data.Heading}</h2>
          <Typography className="Spectrum_2_typography">
            {props.data.Content}
          </Typography>
        </div>
      </div>
    </>
  );
};

export default SpectrumServices;
