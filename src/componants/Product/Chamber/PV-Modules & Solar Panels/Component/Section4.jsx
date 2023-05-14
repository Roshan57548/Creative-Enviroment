import React from "react";
import  './Style/Section4.css'
import Image_1 from './Image/image_2.png';
const Section4 = () => {
  return (
    <>
      <section className="control-console">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h3 className="section2-heading">CONTROL CONSOLE</h3>
              <p className="section2-pv-paragraph">
                <strong>Color Touch Screen Controller</strong> is built around
                high-performance core hardware with integrated functionality.
                Touch screen controller is constructed with Cast Aluminum IP 66
                protected enclosure for front screen with many added features
                viz., Dual USB host port, on board 256MB non-volatile flash
                memory and extended external memory up to 2 GB.
              </p>
              <div className="space"></div>
              <p className="section2-pv-paragraph">
                Touch screen controller allows the user to easily view and
                access information through the 7” Resistive Analog touch screen
                and through web server using a PC. In addition, USB host port
                allows direct transfer of log files, program files and report to
                the external storage devices like Hard disk USB drive.
              </p>
              <div className="space"></div>
              <p className="section2-pv-paragraph">
                ET-touch controller is configured with independent loops control
                (Temperature or RH) with expanded digital, analog and PID
                control capabilities.
              </p>
            </div>
            <div className="col-md-6">
              <img
                src={Image_1}
                className="img-responsive"
                alt="PV-Modules &amp; Solar Panels Testing"
              />
            </div>
          </div>
          <hr />
        </div>
      </section>
    </>
  );
};

export default Section4;
