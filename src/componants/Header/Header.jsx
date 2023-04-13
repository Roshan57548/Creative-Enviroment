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
                  <MDBDropdownItem link href="/Environmental-Test-Chambers">Environmental Test Chambers</MDBDropdownItem>
                  <MDBDropdownItem link href="/Dust-Chambers">Dust Chambers</MDBDropdownItem>
                  <MDBDropdownItem link href="/Thermal-Shock-Chambers">Thermal Shock Chambers</MDBDropdownItem>
                  <MDBDropdownItem link href="/Vibration-Chambers">Vibration Chambers</MDBDropdownItem>
                  <MDBDropdownItem link href="/Industrial-Oven-Dryers">Industrial Oven & Dryers</MDBDropdownItem>
                  <MDBDropdownItem link href="/Razor-Blades-Chambers">Razor Blades Chambers</MDBDropdownItem>
                  <MDBDropdownItem link href="/Thermal-Forcing-System">Thermal Forcing System</MDBDropdownItem>
                  <MDBDropdownItem link href="/Battery-Testing-Chambers">Battery Testing Chambers</MDBDropdownItem>
                  <MDBDropdownItem link href="/Salt-Spray-Chambers">Salt Spray Chambers</MDBDropdownItem>
                  <MDBDropdownItem link href="/Rain-Chambers">Rain Chambers</MDBDropdownItem>
                  <MDBDropdownItem link href="/Altitude-Dryers">Altitude Dryers</MDBDropdownItem>
                  <MDBDropdownItem link href="/Walk-In-Environmental-Chambers">Walk-In Environmental Chambers</MDBDropdownItem>
                  <MDBDropdownItem link href="/Industrial-Chambers">Industrial Chambers</MDBDropdownItem>
                  <MDBDropdownItem link href="/Environmental-Test-Dryers">Environmental Test Dryers</MDBDropdownItem>
                  <MDBDropdownItem link href="/PV-Modules-Solar-Panels">PV-Modules & Solar Panels</MDBDropdownItem>
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
