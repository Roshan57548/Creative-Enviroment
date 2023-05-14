import React from "react";
import "./Style/Section2.css"
import Image_1 from './Image/image_2.png'
const Section2 = () => {
  return (
    <>
      <section className="section-wrap">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h2 className="utm-heading">UTM Interface Environmental Test Chamber</h2>
              <p className="lead">
                ETU-Series UTM Interface Environmental Test Chamber for
                conducting environmental tests at elevated and freezing
                temperatures in order to perform integrated tests for hot &amp;
                cold conditions on universal testing machines.
              </p>
              <p className="second-paragraph">
                Temperature-Relative Humidity-Salt Fog Integrated Test Apparatus
                for UTM Interface is designed to meet the specific test
                requirement of integration test, for this application, test
                enclosure is designed for the rig interface in split units, for
                this from the RC (Remote conditioning) unit purge the
                conditioning air to test enclosure.
              </p>
            </div>
            <div className="col-md-4">
              <div className="space20"></div>
              <img
                src={Image_1}
                alt="Environmental Chambers For Interfacing With UTM’S"
                className="img-responsive"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section2;
