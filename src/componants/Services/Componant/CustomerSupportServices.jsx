import React from "react";
import "./Style/CustomerSupportServices.css";
import { Button } from "react-bootstrap";
import { Typography } from "@mui/material";
const CustomerSupportServices = (props) => {
  return (
    <>
      <div className="CustomerSupportServices">
        <div className="CustomerSupportServices_1">
          <h1>{props.data.Heading}</h1>
          <Typography className="CustomerSupportServices_1_typography">
            {props.data.Content}
          </Typography>
        </div>
      </div>
    </>
  );
};

export default CustomerSupportServices;
