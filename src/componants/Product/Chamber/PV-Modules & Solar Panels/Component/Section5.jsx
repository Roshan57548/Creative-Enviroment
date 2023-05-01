import React from "react";
import './Style/Section5.css'
const Section5 = () => {
  return (
    <>
      <section className="section-wrap charts">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3 className="text-center section2-heading">
                TEST PERFORMANCE CHARTS
              </h3>
            </div>
            <div className="col-md-6">
              <img
                class="img-responsive"
                src="https://www.envisystech.com/themes/envisystech/assets/img/new-imgs19/inner-prods/solar-pv/solar-pv-test-performance-chart-1.jpg"
                alt="PV-Modules &amp; Solar Panels Testing"
              />
              <h4 className="charts-list-heading">HF CYCLE TEST GRAPH</h4>
              <blockquote>
                <strong>Test Description:</strong>
                <br />
                <i class="fa fa-dot-circle-o list-type"></i> Humidity Freeze Test - In
                place of 20hrs we have conducted the trial test for 30 minutes.
              </blockquote>
            </div>
            <div className="col-md-6">
              <img
                class="img-responsive"
                src="https://www.envisystech.com/themes/envisystech/assets/img/new-imgs19/inner-prods/solar-pv/solar-pv-test-performance-chart-2.jpg"
                alt="PV-Modules &amp; Solar Panels Testing"
              />
              <h4 className="charts-list-heading">THERMAL CYCLING TEST</h4>
              <blockquote>
                <strong>Test Description:</strong>
                <br />
                <i class="fa fa-dot-circle-o list-type"></i> Ramp down from 25 to +/-40
                deg C at 100 deg C / h max. <br />
                <i class="fa fa-dot-circle-o list-type"></i> Soak for a min of 10 minutes.{" "}
                <br />
                <i class="fa fa-dot-circle-o list-type"></i> Ramp up to 85 deg C at 100
                deg C / h or less. <br />
                <i class="fa fa-dot-circle-o list-type"></i> Soak for min 10 minutes.{" "}
                <br />
                <i class="fa fa-dot-circle-o list-type"></i> Return to ambient (25 deg C –
                Total cycle 6 hours.
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section5;
