import React from "react";
import "./Style/Section1.css";

const Section1 = (props) => {
  return (
    <>
      <div className="section1_container pv-module-container">
        <div className="section1_bgcolor">
          <div className="section1_wrapper ">
            <div className="section1_image">
              <img
                className="section1_img"
                src="https://www.envisystech.com/themes/envisystech/assets/img/new-imgs19/inner-prods/solar-pv/solar-panel-testing-chamber-ico.png"
                alt=""
              />
            </div>
            <div className="section1_textarea">
              <h5>ET-SERIES</h5>
              <h2 className="section1_main_heading">
                PV-Modules & Solar Panels Testing
              </h2>
              <h6 className="section1_link">
                EASY SET-UP | 18/7 TECHNICAL SUPPORT
              </h6>
              <button className="section1_btn">GET INFO TODAY!</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section1;
