import React from "react";
import "./Style/SpectrumServices.css";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
const SpectrumServices = (props) => {

  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );
  return (
    <>
      <div className="spectrum">
        <div className="spectrum_1">
          <div className="spectrum_2">
            {" "}
            <h4>Creative-Environment-Solutions</h4>
          </div>
          <h1>Spectrum of Services</h1>
          
        </div>
        <div className="spectrum_1_desing">
        
        </div>
        <div className="spectrum_3" >
          {props.data.Data.map((item) => {
            return (
              <Card sx={{ minWidth: 275 }} className="spectrum_4" >
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    {item.logo}
                  </Typography>
                  <Typography variant="h5" component="div" className="spectrum_4_heading">
                    {item.heading_1}
                  </Typography>
                  <Typography variant="body2" className="spectrum_5">
                   {item.discription}
                  </Typography>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SpectrumServices;



