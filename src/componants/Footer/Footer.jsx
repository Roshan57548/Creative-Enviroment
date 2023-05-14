import React from "react";
// import "./Style/Footer.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import "./Style/Footer.css";
const Footer = () => {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span id="Footer-1">Get connected with us on social networks:</span>
        </div>

        <div>
          <a href="" className="me-4 text-reset">
            <MDBIcon id="Footer-1" fab icon="facebook-f" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon id="Footer-1" fab icon="twitter" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon id="Footer-1" fab icon="google" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon id="Footer-1" fab icon="instagram" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon id="Footer-1" fab icon="linkedin" />
          </a>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4" id="Footer-1">
                Creative Environmental Solutions
              </h6>
              <p className="Footer-Color">
                Creative Environmental Solutions is a pioneer manafacturer and
                supplier of environmental condition simulation equipment like
                Electrodynamic vibration test systems (Upto 20 Ton),
                environmental test chambers, Combined vibration chambers,
                Underwater test shakers, shock and bump test machines,
                centrifugal acceleration test machines, inclined impact test
                machine, drop test machine etc
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4" id="Footer-1">
                Products
              </h6>
              <p>
                <a
                  id="TextNone"
                  href="/Chamber/Environmental-Test-Chambers"
                  className="Footer-Color"
                >
                  Environmental Test Chambers
                </a>
              </p>
              <p>
                <a
                  id="TextNone"
                  href="/Other-Categories/Bump-Test-Machine"
                  className="Footer-Color"
                >
                  Bump Test Machine
                </a>
              </p>
              <p>
                <a
                  id="TextNone"
                  href="/Vibration/Electrodynamic-Vibration-Shaker-System"
                  className="Footer-Color"
                >
                  Electro-Dynamic Vibration Shaker System
                </a>
              </p>
              <p>
                <a
                  id="TextNone"
                  href="/Vibration/Air-Cooled-Series"
                  className="Footer-Color"
                >
                  Air Cooled Series
                </a>
              </p>
              <p>
                <a
                  id="TextNone"
                  href="/Vibration/Water-Cooled-Series"
                  className="Footer-Color"
                >
                  Water Cooled Series
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4" id="Footer-1">
                Useful links
              </h6>
              <p>
                <a href="/" className="Footer-Color" id="footer-link">
                  Home
                </a>
              </p>
              <p>
                <a href="/About-Us" className="Footer-Color" id="footer-link">
                  About Us
                </a>
              </p>
              <p>
                <a href="/Our-Partners" className="Footer-Color" id="footer-link">
                  Our Partners
                </a>
              </p>
              <p>
                <a href="/Services" className="Footer-Color" id="footer-link">
                  Services
                </a>
              </p>
              <p>
                <a href="/Contact-Us" className="Footer-Color" id="footer-link">
                  Contact Us
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4" id="Footer-1">
                Contact
              </h6>
              <p className="Footer-Color">
                <MDBIcon id="Footer-1" icon="home" className="me-2" />
                1245K, Green Park Colony, Rampur, Roorkee – 247667 (INDIA)
              </p>
              <p className="Footer-Color">
                <MDBIcon id="Footer-1" icon="envelope" className="me-3" />
                info@cenvs.com
              </p>
              <p className="Footer-Color">
                <MDBIcon id="Footer-1" icon="phone" className="me-3" />{" "}
                +91-9520717737
              </p>
              <p className="Footer-Color">
                <MDBIcon id="Footer-1" icon="print" className="me-3" />{" "}
                +91-8937991921
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "#3991C5", color: "white" }}
      >
        © 2023 <strong>Creative Environmental Solutions</strong> : Developed
        by&nbsp;
        <a
          id="TextNone"
          className="text-reset fw-bold"
          href="https://agbiztech.in/"
          target="_blank"
        >
          AGBIZ
        </a>
      </div>
    </MDBFooter>
  );
};

export default Footer;
