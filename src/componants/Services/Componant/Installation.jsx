import { Typography } from "@mui/material";
import React from "react";
import './Style/Installation.css';
const Installation = (props) => {
  return (
    <>

    <div className="Installation">
    <div className="Installation_1">
          <div className="Installation_1_box">
            <h2>{props.data.Heading_1}</h2>
            <Typography className="Installation_1_box_typography">
             {props.data.Content_1}
            </Typography>

            <Typography className="Installation_1_box_typography">
            {props.data.Content_2}
            </Typography>
          </div>
          <div className="Installation_1_box">
            <h2>{props.data.Heading_2}</h2>
            <Typography className="Installation_1_box_typography">
            {props.data.Content_3}
            </Typography>

            <Typography className="Installation_1_box_typography">
            {props.data.Content_4}
            </Typography>
          </div>
        </div>
    </div>
      
        
  
    </>
  );
};

export default Installation;
