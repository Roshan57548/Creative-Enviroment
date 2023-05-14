import React, { useState } from "react";
import "./Style/MapContent.css";

const MapContent = (props) => {
  const [showAll, setShowAll] = useState(false);

  const handleShowAll = () => {
    setShowAll(true);
  };

  const handleShowLess = () => {
    setShowAll(false);
  };
  return (
    <div className="container ml-5 mr-5 mb-5">
      <h1 className="text-center mb-3 ourPartner-heading">
        {props.data.Heading}
      </h1>
      <hr className="our-partner-hr" />
      <p className="text-center mt-3 mb-2">
        At our company, we believe that our success is intertwined with the
        success of our partners. That's why we are committed to providing you
        with the highest level of service, support, and resources to help you
        achieve your goals.
      </p>
      <div className="row ">
        {props.data.Image.slice(0, 12).map((logo, index) => {
          return (
            <div
              key={index}
              className="image-wrapper-0 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center align-items-center  mb-3"
            >
              <div className="image-wrapper-1 d-flex justify-content-center align-items-center">
                {logo.img}
              </div>
            </div>
          );
        })}
        {showAll &&
          props.data.Image.slice(12).map((logo, index) => {
            return (
              <div
                key={index}
                className="image-wrapper-0 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center align-items-center  mb-3"
              >
                <div className="image-wrapper-1 d-flex justify-content-center align-items-center">
                  {logo.img}
                </div>
              </div>
            );
          })}
      </div>
      <div className="text-center mt-3">
        {!showAll ? (
          <button className="buttonn-1" onClick={handleShowAll}>
            Show More
          </button>
        ) : (
          <button className="buttonn-1" onClick={handleShowLess}>
            Show Less
          </button>
        )}
      </div>
    </div>
  );
};

export default MapContent;
