/* eslint-disable no-unused-vars */
import React from "react";
import "./Style/Section3.css";
import Image_3 from "./Image/image_3.png";
import { Link } from "react-router-dom";
const Section3 = (props) => {
  return (
    <>
      <div className="sec_container">
        <div className="sec_bgcolor">
          <div className="sec_wrappers">
            <div className="sec_image">
              <img className="sec_img" src={Image_3} alt="" />
            </div>
            <div className="sec_textarea">
              <h2 className="sec-heading">
                Electronic Filters & Signal Conditioning
              </h2>
              <p>
                We supply a full range of precision filters and signal
                conditioning solutions including Charge amplifiers, IEPE signal
                conditioning and other options for 4-20mA and PRT. Following is
                a list of different types of filters and signal conditioning
                instruments:
              </p>
              <ul className="version-details">
                <li>DR1200 Din Rail mounted fixed frequency filters</li>
                <li>DR1600 Din Rail mounted variable frequency filters</li>
                <li>BenchMaster 8 – 2 channel manual filter</li>
                <li>CardMaster 21.2 – Up to 42 channels per rack</li>
                <li>CardMaster 21.255G – Ethernet control</li>
                <li>BenchMaster 21M – Switchable High / Low pass</li>
                <li>
                  VBF44 – Multichannel fully programmable filter instrument
                </li>
                <li>
                  VBF40 – Multichannel fully programmable filter instrument
                </li>
                <li>DR1000 – Din Rail mounted signal conditioning</li>
                <li>3X Range of 3 channel signal conditioning</li>
                <li>9X Range of 9 channel signal conditioning</li>
                <li>Inline Charge Signal Conditioning Converters</li>
              </ul>
              <div className="first-link">
                <h5 className="button_link">
                  To know more about filters please click the below link
                </h5>
                <Link
                  to="https://kemo.com/electronic-analog-filters/"
                  target="_blank"
                >
                  <button className="sec_btn ">Visit Here</button>
                </Link>
              </div>
              <div className="second_links">
                <h5 className="button_link">
                  To know more about signal conditioning please click below link
                </h5>
                <Link
                  to="https://kemo.com/iepe-signal-conditioning-amplifiers-and-power-sources/"
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

export default Section3;
