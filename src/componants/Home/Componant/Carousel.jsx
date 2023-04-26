import React, { useEffect, useState } from "react";
import "./Style/Carousel.css";
import { Box } from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";
import Carousels from "../Content/Carousel";

const Carousel = (props) => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [link, setLink] = useState([]);

  useEffect(() => {
    setData(Carousels.Headings);
  }, []);

  return (
    <div className="carousel-main-container">
      <swiper-container
        className="Carousel-mySwiper"
        pagination="true"
        pagination-type="progressbar"
        navigation="true"
        centered-slides="true" autoplay-delay="2500" autoplay-disable-on-interaction="false">
        {/* {console.log(typeof(data))} */}
        {data.map((content, index) => (
          <swiper-slide key={index}>
            <Box className="carousel-wrapper-flex">
              <div className="carousel-content-container01">
                <div className="carousel-content-heading01">{content.h}</div>
                <p className="carousel-content-data01">{content.d}</p>
                <Box className="carousel-button-main_div">
                  <div
                    className="carousel-button-container"
                    onClick={() => navigate(content.l)}
                  >
                    KNOW MORE
                  </div>
                </Box>
              </div>
              <div className="carousel-image-container">
                <img src={content.i} alt="my_image "/>
              </div>
            </Box>
          </swiper-slide>
        ))}
      </swiper-container>
    </div>
  );
};

export default Carousel;
