import React from "react";
import "./Style/Maintenance.css";
import { Typography } from "@mui/material";
const RepairService = (props) => {
  return (
    <>
      <div className="Maintenance">
        <div className="Maintenance_1">
          <h2>{props.data.Heading}</h2>
        </div>
        <div className="Maintenance_2">
          <div className="Maintenance_2_box">
            <h3>{props.data.Heading_1}</h3>
            <Typography className="Maintenance_2_box_typography">
              {props.data.Content_1}
            </Typography>
          </div>
          <div className="Maintenance_2_box">
            <h3>{props.data.Heading_2}</h3>
            <Typography className="Maintenance_2_box_typography">
              {props.data.Content_2}
            </Typography>
          </div>
          <div className="Maintenance_2_box">
            <h3>{props.data.Heading_3}</h3>
            <Typography className="Maintenance_2_box_typography">
            {props.data.Content_3}
            </Typography>
          </div>
        </div>
      </div>
    </>
  );
};

export default RepairService;
