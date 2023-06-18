/* eslint-disable no-unused-vars */
import React from "react";
import "./Style/Section2.css";
import Image_2 from "./Image/image_2.png";
import { Link } from "react-router-dom";
const Section2 = (props) => {
  return (
    <>
      <div className="sec_container">
        <div className="sec_bgcolor">
          <div className="sec_wrappered">
            <div className="sec_image">
              <img className="sec_img" src={Image_2} alt="" />
            </div>
            <div className="sec_textarea">
              <h2 className="sec-heading">Accelerometers</h2>
              <p>
                We offer a wide range of Piezoelectric charge output
                accelerometers and IEPE (Integrated Electronic Piezoelectric)
                Accelerometers, supported by a full range of mounting
                accessories. The different types include following category of
                accelerometers:
              </p>
              <ul className="version-details">
                <li>Monoaxial IEPE Accelerometers</li>
                <li>Triaxial IEPE Accelerometers</li>
                <li>Shock Piezoelectric Charge Output Accelerometers</li>
                <li>Shock IEPE Accelerometers</li>
                <li>Triaxial Shock Accelerometers</li>
                <li>Piezoelectric Charge Output Accelerometers</li>
                <li>Piezoelectric Charge Output Triaxial Accelerometers</li>
              </ul>
              <p>
                <b> Submersible Accelerometers:</b> A wide range of waterproof
                monoaxial and triaxial accelerometers for use in underwater
                monitoring. Typical depths have been tested up to 50m.
              </p>
              <div className="first-link">
                <h5 className="button_link">
                  To know more about IEPE Accelerometers please click the below
                  link
                </h5>
                <Link
                  to="https://kemo.com/iepe-accelerometers/"
                  target="_blank"
                >
                  <button className="sec_btn ">Visit Here</button>
                </Link>
              </div>
              <div className="second_links">
                <h5 className="button_link">
                  To know more about Charge Accelerometers please click below
                  link
                </h5>
                <Link
                  to="https://kemo.com/piezoelectric-accelerometers/"
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

export default Section2;
