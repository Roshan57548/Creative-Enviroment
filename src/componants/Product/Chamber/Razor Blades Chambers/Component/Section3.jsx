import React from "react";
import "./Style/Section3.css";
import Image_1 from './Image/image_4.png'
const Section3 = (props) => {
  return (
    <>
      <section className="Section-about-razor-blade">
        <div className="container mb-5">
          <div className="row">
            <div className="col-md-12">
              <div className="section-heading text-center">
                <h2>
                  SUB-ZERO CHAMBER
                  <br />
                  FOR AUTOMOTIVE COMPONENTS:
                </h2>
                <div className="inline"></div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-6 img-table-right">
                <img
                  src={Image_1}
                  alt=""
                  className="img-responsive "
                />
              </div>
              <div className="col-md-6 specific-points table-container">
                <h4 className="table-heading">
                  Vertical Sub-Zero Chambers for heat treatment applications of
                  automotive components.
                </h4>
                <table className="table table-responsive table-bordered ">
                  <tbody className="content-table">
                    <tr>
                      <td>
                        <strong>Models</strong>
                      </td>
                      <td>
                        <strong>Cooling Capacity</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>ESC 140-80-1-T</td>
                      <td>25kg/hr</td>
                    </tr>
                    <tr>
                      <td>ESC 280 – 80-1.5-T</td>
                      <td>95kg/hr</td>
                    </tr>
                    <tr>
                      <td>ESC 600– 80-6-T</td>
                      <td>125kg/hr</td>
                    </tr>
                    <tr>
                      <td>ESC 990 – 80-7.5-T</td>
                      <td>250kg/hr</td>
                    </tr>
                    <tr>
                      <td>ESC 1700– 80-7.5-F</td>
                      <td>225kg/hr</td>
                    </tr>
                    <tr>
                      <td>ESC 2500-80-10-F</td>
                      <td>300kg/hr</td>
                    </tr>
                    <tr>
                      <td>Volume</td>
                      <td>140,280,600,990,1700 & 2500 Litres</td>
                    </tr>
                    <tr>
                      <td>Temp</td>
                      <td>Ambient to 80°C</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section3;
