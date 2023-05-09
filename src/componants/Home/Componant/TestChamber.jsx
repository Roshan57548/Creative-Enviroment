import React, { useState } from "react";
import "./Style/TestChamber.css";

const TestChamber = (props) => {
  const [selectedImage, setSelectedImage] = useState(props.data.images[0]);

  const handleClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className="testChamber">
      <div className="container ">
        <div className="testChamber-0 row">
          <div className="left-section col-lg-5 col-md-12">
            <div className="row">
              {props.data.images.slice(0, 3).map((image, index) => (
                <div className="col-4" key={index}>
                  <img
                    src={image.img}
                    alt=""
                    onMouseEnter={() => handleClick(image)}
                    className={selectedImage === image ? "selected" : ""}
                  />
                </div>
              ))}
            </div>
            <div className="row">
              <div className="col-12">
                <img src={selectedImage.img} alt="" />
              </div>
            </div>
            <div className="row">
              {props.data.images.slice(3).map((image, index) => (
                <div className="col-4" key={index}>
                  <img
                    src={image.img}
                    alt=""
                    onMouseEnter={() => handleClick(image)}
                    className={selectedImage === image ? "selected" : ""}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="right-section col-lg-7 col-md-12">
            <h2>{props.data.heading}</h2>
            <h4>{props.data.sub_heading}</h4>
            <p>{props.data.para}</p>
            <div className="tc_links_container">
              <div className="tc_links">
                <div className="tc_links_img">
                  {props.data.cards[0].card_image}
                </div>
                <div className="tc_links_heading">
                  <h5 className="tc_lk_heading">
                    {props.data.cards[0].card_heading}
                  </h5>
                </div>
              </div>
              <div className="tc_links">
                <div className="tc_links_img">
                  {props.data.cards[1].card_image}{" "}
                </div>
                <div className="tc_links_heading">
                  <h5 className="tc_lk_heading">
                    {props.data.cards[1].card_heading}
                  </h5>
                </div>
              </div>
              <div className="tc_links">
                <div className="tc_links_img">
                  {props.data.cards[2].card_image}
                </div>
                <div className="tc_links_heading">
                  <h5 className="tc_lk_heading">
                    {props.data.cards[2].card_heading}
                  </h5>
                </div>
              </div>
              <div className="tc_links">
                <div className="tc_links_img">
                  {props.data.cards[3].card_image}
                </div>
                <div className="tc_links_heading">
                  <h5 className="tc_lk_heading">
                    {props.data.cards[3].card_heading}
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestChamber;
