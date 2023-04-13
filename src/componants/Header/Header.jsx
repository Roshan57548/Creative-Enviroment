import React, { useState } from "react";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from "mdb-react-ui-kit";
import Company_logo from "../../../src/Image/Company-Logo/Company_logo.png";
import "./Style/Header.css";
const Header = () => {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <MDBNavbar expand="lg" light className="navbar-color">
      <MDBContainer>
        <MDBNavbarBrand href="#"><img src={Company_logo} className="nabvar-image"></img></MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
            <MDBNavbarItem>
              <MDBNavbarLink aria-current="page" href="/" id="navbar-link">
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="/About-Us" id="navbar-link">About Us</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink
                id="navbar-link"
                href="/Services"
                tabIndex={-1}
                aria-disabled="true"
              >
                Services
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink
                id="navbar-link"
                href="/Contact-Us"
                tabIndex={-1}
                aria-disabled="true"
              >
                Contact Us
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>

          <MDBNavbarNav className="d-flex input-group w-auto">
            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag="a" className="nav-link" role="button" id="navbar-link">
                  Chamber
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link>Environmental Test Chambers</MDBDropdownItem>
                  <MDBDropdownItem link>Dust Chambers</MDBDropdownItem>
                  <MDBDropdownItem link>Thermal Shock Chambers</MDBDropdownItem>
                  <MDBDropdownItem link >Vibration Chambers</MDBDropdownItem>
                  <MDBDropdownItem link>Industrial Oven & Dryers</MDBDropdownItem>
                  <MDBDropdownItem link>Razor Blades Chambers</MDBDropdownItem>
                  <MDBDropdownItem link >Thermal Forcing System</MDBDropdownItem>
                  <MDBDropdownItem link>Battery Testing Chambers</MDBDropdownItem>
                  <MDBDropdownItem link>Salt Spray Chambers</MDBDropdownItem>
                  <MDBDropdownItem link >Rain Chambers</MDBDropdownItem>
                  <MDBDropdownItem link>Altitude Dryers</MDBDropdownItem>
                  <MDBDropdownItem link>Walk-In Environmental Chambers</MDBDropdownItem>
                  <MDBDropdownItem link >Industrial Chambers</MDBDropdownItem>
                  <MDBDropdownItem link>Environmental Test Dryers</MDBDropdownItem>
                  <MDBDropdownItem link>PV-Modules & Solar Panels</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>
          </MDBNavbarNav>
          <MDBNavbarNav className="d-flex input-group w-auto">
            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag="a" className="nav-link" role="button" id="navbar-link">
                  Vibration
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                <MDBDropdownItem link>Electrodynamic Shaker</MDBDropdownItem>
                  <MDBDropdownItem link>Power Amplifier</MDBDropdownItem>
                  <MDBDropdownItem link>Air Cooled SEV 125 Series</MDBDropdownItem>
                  <MDBDropdownItem link >Air Cooled SEV 140 Series</MDBDropdownItem>
                  <MDBDropdownItem link>Air Cooled SEV 180 Series</MDBDropdownItem>
                  <MDBDropdownItem link>Air Cooled SEV 240 Series</MDBDropdownItem>
                  <MDBDropdownItem link >Air Cooled SEV 300 Series</MDBDropdownItem>
                  <MDBDropdownItem link>Air Cooled SEV 360 Series</MDBDropdownItem>
                  <MDBDropdownItem link>Air Cooled SEV 440 Series</MDBDropdownItem>
                  <MDBDropdownItem link >Air Cooled SEV 440A Series</MDBDropdownItem>
                  <MDBDropdownItem link>Water Cooled SEW 500 Series</MDBDropdownItem>
                  <MDBDropdownItem link>Water Cooled SEW 590 Series</MDBDropdownItem>
                  <MDBDropdownItem link >Water Cooled SEW 760 Series</MDBDropdownItem>
                  <MDBDropdownItem link>Head Expander</MDBDropdownItem>
                  <MDBDropdownItem link>Vibration Controller</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>
          </MDBNavbarNav>
          <MDBNavbarNav className="d-flex input-group w-auto">
            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag="a" className="nav-link" role="button" id="navbar-link">
                  Integrated
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link>Integrated Chamber</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
};
export default Header;
