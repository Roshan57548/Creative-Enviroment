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
import './Style/Footer.css';
const Footer = () => {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span id="Footer-1">Get connected with us on social networks:</span>
        </div>

        <div>
          <a href="" className="me-4 text-reset">
            <MDBIcon id="Footer-1"  fab icon="facebook-f" />
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
                Creative Environment Solution
              </h6>
              <p>
                Creative Environment Solution provides customized environmental testing
                solutions for a wide range of industries including electronics,
                automotive, defense, aerospace, and many more. Their testing
                solutions are designed to meet the unique needs and requirements
                of each industry, ensuring that their clients products are
                thoroughly tested and meet the highest quality standards.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4" id="Footer-1">Products</h6>
              <p>
                <a href="#!" className="text-reset">
                Environmental Test Chambers
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                Environmental WalkIn Chambers
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                Electrodynamic Shaker
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                Integrated Chamber
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4" id="Footer-1">Useful links</h6>
              <p>
                <a href="/" className="text-reset" id="footer-link">
                  Home
                </a>
              </p>
              <p>
                <a href="/About-Us" className="text-reset" id="footer-link">
                  About Us
                </a>
              </p>
              <p>
                <a href="/Services" className="text-reset" id="footer-link">
                  Services
                </a>
              </p>
              <p>
                <a href="/Contact-Us" className="text-reset" id="footer-link">
                  Contact Us
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4" id="Footer-1">Contact</h6>
              <p>
                <MDBIcon id="Footer-1" icon="home" className="me-2" />
                New York, NY 10012, US
              </p>
              <p>
                <MDBIcon id="Footer-1" icon="envelope" className="me-3" />
                info@example.com
              </p>
              <p>
                <MDBIcon id="Footer-1" icon="phone" className="me-3" /> + 01
                234 567 88
              </p>
              <p>
                <MDBIcon id="Footer-1" icon="print" className="me-3" /> + 01
                234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "#3991C5", color: "white" }}
      >
        © 2023 <strong>Creative Environment Solution</strong> : Developed
        by&nbsp;
        <a
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
