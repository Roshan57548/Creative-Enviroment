/* eslint-disable no-unused-vars */
import React from "react";
import "./Style/Section4.css";
import Image_4 from "./Image/image_4.png";
import { Link } from "react-router-dom";
const Section4 = (props) => {
  return (
    <>
      <div className="sec_container">
        <div className="sec_bgcolor">
          <div className="sec_wrapper">
            <div className="sec_image">
              <img className="sec_img" src={Image_4} alt="" />
            </div>
            <div className="sec_textarea">
              <h2 className="sec-heading">
                Impact Hammers, Calibrators & Other Equipment
              </h2>
              <p>
                We also supply associated equipment to support our customers.
                These equipment works perfectly alongside our sensors, signal
                conditioning and low noise electronic filter solutions. It
                includes following products.
              </p>
              <ul className="version-details">
                <li>
                  General purpose IEPE impact hammers for structural testing
                </li>
                <li>
                  Submersible Impact Hammers for underwater structural testing.
                </li>
                <li>Battery powered handheld accelerometer calibrator</li>
                <li>Impedance heads</li>
              </ul>
              <div className="first-link">
                <h5 className="button_link">
                  To know more about Charge Accelerometers please click the
                  below link
                </h5>
                <Link
                  to="https://kemo.com/iepe-impact-hammers-instrumented-hammers-for-modal-structural-testing/"
                  target="_blank"
                >
                  <button className="sec_btn ">Visit Here</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section4;
