import React from "react";
import "./Style/SolutionProvider.css";
import { Box, Typography } from "@mui/material";
import image1 from "../Images/manufacturing_image.jpg";
import image2 from "../Images/maintenance_image.jpg";
import image3 from "../Images/refurbished_image.jpg";
import image4 from "../Images/repair_image2.jpg";
import image5 from "../Images/rentals_image.jpg";
const SolutionProvider = (props) => {
  return (
    <div className="SolutionProvider">
      <Box className="flex-container SolPro_heading01">
        <Typography>{props.data.Links[0].msg1}</Typography>
      </Box>
      <Box className="flex-container SolPro_heading02">
        {props.data.Links[0].msg2}
      </Box>
      <div className="container SolPro_images">
        <Box className="flex-container images_container">
          <div className="SolPro_image1">
            <img src={image1} alt="my_image" className="image_01" />
            <h6 className="sub-heading_01">MANUFACTURING</h6>
          </div>
          <div className="SolPro_image2">
            <img src={image2} alt="my_image" className="image_01" />
            <h6 className="sub-heading_01">REFURBISHMENT</h6>
          </div>
          <div className="SolPro_image3">
            <img src={image3} alt="my_image" className="image_01" />
            <h6 className="sub-heading_01">MAINTENANCE</h6>
          </div>
          <div className="SolPro_image4">
            <img src={image4} alt="my_image" className="image_01" />
            <h6 className="sub-heading_01">24/7 SUPPORT</h6>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default SolutionProvider;
