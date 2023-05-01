import React from "react";
import "./Style/Section3.css";
const Section3 = () => {
  return (
    <>
      <section className="section-wrap">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h4 className="section2-heading">SAMPLE TESTING SPECIFICATIONS OF SOLAR PANELS/PV MODULES</h4>
              <p className="section2-pv-paragraph">
                The rapid change in the growth of solar industry has led to the
                high demand creation for solar products/modules in the recent
                years. Especially the PV modules that generate solar energy the
                demand has been phenomenon in the last few years. Hence the need
                for testing these products for various environmental stresses
                viz., temperature, humidity, solar radiations etc., has been
                increased substantially. In order meet this demand on a
                cost-effective solution Envisys Technologies manufactures the
                test chambers suitable to comply various international standards
                like IEC, UL and other organizations.
              </p>
              <p className="section2-pv-paragraph">
                The above table indicates the sample test procedures of solar
                panels/PV modules testing according the most recognized
                standards. Envisys can design and manufacture chambers according
                to the customer needs on specified standards, sizes of panels,
                ramp rate or if the customer wishes to have independent chamber
                for damp heat cycle, we can provide the same to meeting your
                demand of testing the panels.
              </p>
            </div>
            <div className="col-md-6">
              <div className="specific-points-pv table-data-space">
                <table className="table table-responsive table-bordered">
                  <tbody className="content-table">
                    <tr>
                      <th>Standards</th>
                      <th>Testing Procedures</th>
                    </tr>
                    <tr>
                      <td>IEC 61215</td>
                      <td>
                        <ul>
                          <li>
                            Crystalline silicon terrestrial photo-voltaic (PV)
                            modules
                          </li>
                          <li>
                            Temp. Cyclic Test: -40 deg C to +85 deg C for 50
                            cycles or 200 cycles Humidity Freeze -40 deg C to
                            +85 deg C &amp; 85% RH – 10 Cycles Damp Heat: +85
                            deg C &amp; 85% RH for 1000 hours
                          </li>
                          <li>Humidity control during the temperature ramp</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td>IEC 61646</td>
                      <td>
                        <ul>
                          <li>
                            Thin-film terrestrial PV modules - Temp. Cylic Test:
                            -40 deg C to +85 deg C for 50 cycles or 200 cycles
                            Humidity Freeze -40 deg C to +85 deg C &amp; 85% RH
                            – 10 Cycles Damp Heat: +85 deg C &amp; 85% RH for
                            1000 hours
                          </li>
                          <li>
                            No humidity control during the temperature ramp
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td>IEC 61730</td>
                      <td>
                        PV module safety qualification test: Part 2: Requirement
                        for testing
                      </td>
                    </tr>
                    <tr>
                      <td>IEC 62108</td>
                      <td>
                        CPV modules and its assemblies-Design Qualification
                      </td>
                    </tr>
                    <tr>
                      <td>UL 1703</td>
                      <td>Flat Plate PV Modules and Panels</td>
                    </tr>
                    <tr>
                      <td>ASTM E1171</td>
                      <td>
                        Test Methods for PV modules in cyclic temp and humidity
                        conditions
                      </td>
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
