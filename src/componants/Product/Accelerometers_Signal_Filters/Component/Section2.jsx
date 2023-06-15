/* eslint-disable no-unused-vars */
import React from "react";
import "./Style/Section2.css";
import Image_2 from "./Image/image_2.png";
const Section2 = (props) => {
  return (
    <>
      <section className="section-wrap">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2 className="salt-spray-heading">Accelerometers</h2>
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
            </div>
            <div className="col-md-6">
              <img src={Image_2} alt="" className="Section2_img" />
            </div>
            <div className="col-md-12">
              
              <p>
             <b> Submersible Accelerometers:</b> A wide range of waterproof monoaxial and triaxial accelerometers for use in underwater monitoring. Typical depths have been tested up to 50m.
              </p>
              <h5 className='Second-link'>To know more about IEPE Accelerometers please click on -<a href='https://kemo.com/iepe-accelerometers/' className='section1_btn'>Click on</a></h5>
              <h5 className='Second-link'>To know more about Charge Accelerometers please click on -<a href='https://kemo.com/piezoelectric-accelerometers/' className='section1_btn'>Click on</a></h5>
            </div>
            
          </div>
          <hr />
        </div>
      </section>
    </>
  );
};

export default Section2;
