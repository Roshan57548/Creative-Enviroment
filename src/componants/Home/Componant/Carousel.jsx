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
                    <div className="col-lg-4 col-md-5 col-12 carousel-container-contents">
                      <div className="carousel-heading01">{heading.h}</div>
                      <div className="carousel-content01">{heading.d}</div>
                      <div className="carousel-content-button">
                        <div className="carousel-button-container" onClick={() => navigate(heading.l)}>
                          KNOW MORE
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-8 col-md-7 col-12 carousel-images">
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