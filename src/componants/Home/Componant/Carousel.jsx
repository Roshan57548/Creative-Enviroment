import React, { useEffect, useState } from "react";
import "./Style/Carousel.css";
import { Navigate, useNavigate } from "react-router-dom";
import Carousels from "../Content/Carousel";

const Carousel = (props) => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setData(Carousels.Headings);
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === data.length - 1 ? 0 : activeIndex + 1);
    }, 2500);
    return () => clearInterval(interval);
  }, [activeIndex, data]);

  const handlePrevClick = () => {
    setActiveIndex(activeIndex === 0 ? data.length - 1 : activeIndex - 1);
  };

  const handleNextClick = () => {
    setActiveIndex(activeIndex === data.length - 1 ? 0 : activeIndex + 1);
  };

  return (
    <div className="container-fluid carousel-main-container">
      <div
        id="carouselExampleControls"
        className="carousel slide container01"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {data &&
            data.map((heading, index) => (
              <div
                className={
                  index === activeIndex ? 'carousel-item active' : 'carousel-item'
                }
                key={index}
              >
                <div className="carousel_container">
                  <div className="row carousel-row">
                    <div className="col-sm-4 carousel-container-contents">
                      <div className="carousel-heading01">{heading.h}</div>
                      <div className="carousel-content01">{heading.d}</div>
                      <div className="carousel-content-button">
                        <div className="carousel-button-container" onClick={() => navigate(heading.l)}>
                          KNOW MORE
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-8 carousel-images">
                      <div className="caraousel-image-container">
                        <img
                          src={heading.i}
                          alt="my_image"
                          className="img-fluid carousel-image01"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <button
          className="carousel-control-prev carousel_prev_icon-control"
          type="button"
          onClick={handlePrevClick}
        >
          <span className="carousel-control-prev-icon carousel_prev_icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next carousel_next_icon-control"
          type="button"
          onClick={handleNextClick}
        >
          <span className="carousel-control-next-icon carousel_next_icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;







 {/* <div class="carousel-item">
          <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Second slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#666"></rect><text x="50%" y="50%" fill="#444" dy=".3em">Second slide</text></svg>
    
        </div>
        <div class="carousel-item">
          <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Third slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#555"></rect><text x="50%" y="50%" fill="#333" dy=".3em">Third slide</text></svg>
    
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev" fdprocessedid="2luep7">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next" fdprocessedid="y4kqws">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      {/* </button> */}
       {/* <swiper-container
        className="Carousel-mySwiper"
        pagination="true"
        pagination-type="progressbar"
        navigation="true"
        centered-slides="true" autoplay-delay="2500" autoplay-disable-on-interaction="false">
        {/* {console.log(typeof(data))} */}
        {/* {data.map((content, index) => (
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
      </swiper-container> */} 