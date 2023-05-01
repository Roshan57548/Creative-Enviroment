import React from 'react'
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "./Style/OurPresence.css";
const OurPresence = (props) => {
  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      
    </Box>
  );
  return (
    <>
      <div className="OurPresence">
        <div className="OurPresence_1">
          <div className="OurPresence_2">
            <h4>Creative-Environmental-Solutions</h4>
          </div>
          <h1>Our Presence Across The World</h1>
          
        </div>
        <div className="OurPresence_1_desing">
        
        </div>
        <div className="OurPresence_3" >
          {props.data.Data.map((item) => {
            return (
              <Card sx={{ minWidth: 250 }} className="OurPresence_4" >
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="#1e6c99"
                    gutterBottom
                    className='OurPresence_logo'
                  >
                    {item.logo}
                  </Typography>
                  <Typography variant="h5" component="div" className="OurPresence_4_heading">
                    {item.heading_1}
                  </Typography>
                  <Typography variant="body2" className="OurPresence_5">
                   {item.discription}
                  </Typography>
                  <Typography variant="body2" className="OurPresence_6">
                  <strong> Phone:</strong> {item.phone}
                  </Typography>
                  <Typography variant="body2" className="OurPresence_7">
                  <strong> Email:</strong> {item.email}
                  </Typography>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default OurPresence