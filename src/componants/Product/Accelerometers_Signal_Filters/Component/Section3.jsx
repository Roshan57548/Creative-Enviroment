/* eslint-disable no-unused-vars */
import React from "react";
import "./Style/Section3.css";
import Image_3 from "./Image/image_3.png";
const Section3 = (props) => {
  return (
    <>
      <section className="section-wrap">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2 className="salt-spray-heading">Electronic Filters & Signal Conditioning</h2>
              <p>
              We supply a full range of precision filters and signal conditioning solutions including Charge amplifiers, IEPE signal conditioning and other options for 4-20mA and PRT.
              Following is a list of different types of filters and signal conditioning instruments:
              </p>
              <ul className="version-details">
                <li>DR1200 Din Rail mounted fixed frequency filters</li>
                <li>DR1600 Din Rail mounted variable frequency filters</li>
                <li>BenchMaster 8 – 2 channel manual filter</li>
                <li>CardMaster 21.2 – Up to 42 channels per rack</li>
                <li>CardMaster 21.255G – Ethernet control</li>
                <li>BenchMaster 21M – Switchable High/Low pass</li>
                <li>VBF44 – Multichannel fully programmable filter instrument</li>
                <li>VBF40 – Multichannel fully programmable filter instrument</li>
                <li>DR1000 – Din Rail mounted signal conditioning</li>
                <li>3X Range of 3 channel signal conditioning</li>
                <li>9X Range of 9 channel signal conditioning</li>
                <li>Inline Charge Signal Conditioning Converters</li>
                
              </ul>
            </div>
            <div className="col-md-6">
              <img src={Image_3} alt="" className="Section2_img" />
            </div>
            <div className="col-md-12">
              
              <p>
             {/* <b> Submersible Accelerometers:</b> A wide range of waterproof monoaxial and triaxial accelerometers for use in underwater monitoring. Typical depths have been tested up to 50m. */}
              </p>
              <h5 className='Second-link'>To know more about filters please click on -<a href='https://kemo.com/electronic-analog-filters/' className='section1_btn'>Click on</a></h5>
              <h5 className='Second-link'>To know more about signal conditioning please click on -<a href='https://kemo.com/iepe-signal-conditioning-amplifiers-and-power-sources/' className='section1_btn'>Click on</a></h5>
            </div>
            
          </div>
          <hr />
        </div>
      </section>
    </>
  );
};

export default Section3;
