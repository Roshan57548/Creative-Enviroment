/* eslint-disable no-unused-vars */
import React from "react";
import "./Style/Section3.css";
import Image_4 from "./Image/image_4.png";
const Section4 = (props) => {
  return (
    <>
      <section className="section-wrap">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2 className="salt-spray-heading">Impact Hammers, Calibrators & Other Equipment </h2>
              <p>
              We also supply associated equipment to support our customers. These equipment works perfectly alongside our sensors, signal conditioning and low noise electronic filter solutions. It includes following products.
              </p>
              <ul className="version-details">
                <li>General purpose IEPE impact hammers for structural testing</li>
                <li>Submersible Impact Hammers for underwater structural testing.</li>
                <li>Battery powered handheld accelerometer calibrator</li>
                <li>Impedance heads</li>
                
              </ul>
            </div>
            <div className="col-md-6">
              <img src={Image_4} alt="" className="Section2_img" />
            </div>
            <div className="col-md-12">
              
              <h5 className='Second-link'>To know more about Charge Accelerometers please click on -<a href='https://kemo.com/iepe-impact-hammers-instrumented-hammers-for-modal-structural-testing/' className='section1_btn'>Click on</a></h5>
            </div>
            
          </div>
          <hr />
        </div>
      </section>
    </>
  );
};

export default Section4;
