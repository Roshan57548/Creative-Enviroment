import React, { useState } from "react";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  MDBCol,
  MDBListGroup,
  MDBListGroupItem,
  MDBRow,
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
    <MDBNavbar expand="lg" id="Navbar-0-1" fixed="top" className="navbar-color">
      <MDBContainer>
        <MDBNavbarBrand href="/" id="Navbar-0-2">
          <img src={Company_logo} className="nabvar-image"></img>
        </MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic} id="Navbar-20">
          <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
            <MDBNavbarItem>
              <MDBNavbarLink
                aria-current="page"
                href="/"
                id="navbar-link"
                className="Navbar-0-3"
              >
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink
                href="/About-Us"
                id="navbar-link"
                className="Navbar-0-3"
              >
                About Us
              </MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem className="position-static" >
              <MDBDropdown >
                <MDBDropdownToggle tag="a" className="nav-link" id="Navbar-3" 
               >
                  Environmental Chamber
                </MDBDropdownToggle>
                <MDBDropdownMenu
                  className="mt-0 justify-content-center"
                  style={{
                    borderTopLeftRadius: "0",
                    borderTopRightRadius: "0",
                  }}
                  
                >
                  <MDBContainer id="Navbar-13">
                    <MDBRow className="my-4">
                      <MDBCol md="6" lg="6" sm="12" className="mb-3 mb-lg-0">
                        <MDBListGroup flush>
                          <MDBListGroupItem
                            tag="a"
                            href="/Environmental-Test-Chambers"
                            action
                            id="Navbar-19"
                            
                          >
                            Environmental Test Chambers
                          </MDBListGroupItem>
                          <MDBListGroupItem
                            tag="a"
                            href="/Dust-Chambers"
                            action
                            id="Navbar-19"
                          >
                            Dust Chambers
                          </MDBListGroupItem>
                          <MDBListGroupItem
                            tag="a"
                            href="/Thermal-Shock-Chambers"
                            action
                            id="Navbar-19"
                          >
                            Thermal Shock Chambers
                          </MDBListGroupItem>
                          <MDBListGroupItem
                            tag="a"
                            href="/Vibration-Chambers"
                            action
                            id="Navbar-19"
                          >
                            Vibration Chambers
                          </MDBListGroupItem>
                          <MDBListGroupItem
                            tag="a"
                            href="/Industrial-Oven-Dryers"
                            action
                            id="Navbar-19"
                          >
                            Industrial Oven & Dryers
                          </MDBListGroupItem>
                          <MDBListGroupItem
                            tag="a"
                            href="/Altitude-Dryers"
                            action
                            id="Navbar-19"
                          >
                            Altitude Dryers
                          </MDBListGroupItem>
                          <MDBListGroupItem
                            tag="a"
                            href="/Walk-In-Environmental-Chambers"
                            action
                            id="Navbar-19"
                          >
                            Walk-In Environmental Chambers
                          </MDBListGroupItem>
                          <MDBListGroupItem
                            tag="a"
                            href="/Razor-Blades-Chambers"
                            action
                            id="Navbar-19"
                          >
                            Razor Blades Chambers
                          </MDBListGroupItem>
                        </MDBListGroup>
                      </MDBCol>
                      <MDBCol md="6" lg="6" className="mb-3 mb-lg-0">
                        <MDBListGroup flush>
                          
                          <MDBListGroupItem
                            tag="a"
                            href="/Thermal-Forcing-System"
                            action
                            id="Navbar-19"
                          >
                            Thermal Forcing System
                          </MDBListGroupItem>
                          <MDBListGroupItem
                            tag="a"
                            href="/Battery-Testing-Chambers"
                            action
                            id="Navbar-19"
                          >
                            Battery Testing Chambers
                          </MDBListGroupItem>
                          <MDBListGroupItem
                            tag="a"
                            href="/Salt-Spray-Chambers"
                            action
                            id="Navbar-19"
                          >
                            Salt Spray Chambers
                          </MDBListGroupItem>
                          <MDBListGroupItem
                            tag="a"
                            href="/Rain-Chambers"
                            action
                            id="Navbar-19"
                          >
                            Rain Chambers
                          </MDBListGroupItem>
                          <MDBListGroupItem
                            tag="a"
                            href="/Industrial-Chambers"
                            action
                            id="Navbar-19"
                          >
                            Industrial Chambers
                          </MDBListGroupItem>
                          <MDBListGroupItem
                            tag="a"
                            href="/Environmental-Test-Dryers"
                            action
                            id="Navbar-19"
                          >
                            Environmental Test Dryers
                          </MDBListGroupItem>
                          <MDBListGroupItem
                            tag="a"
                            href="/PV-Modules-Solar-Panels"
                            action
                            id="Navbar-19"
                          >
                            PV-Modules & Solar Panels
                          </MDBListGroupItem>
                        </MDBListGroup>
                      </MDBCol>
                    </MDBRow>
                  </MDBContainer>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>
            <MDBNavbarItem className="position-static">
              <MDBDropdown>
                <MDBDropdownToggle tag="a" className="nav-link" id="Navbar-3">
                  Electrodynamic Vibration System
                </MDBDropdownToggle>
                <MDBDropdownMenu
                  className="mt-0 justify-content-center"
                  style={{
                    borderTopLeftRadius: "0",
                    borderTopRightRadius: "0",
                  }}
                >
                  <MDBContainer id="Navbar-13">
                    <MDBRow className="my-4">
                      <MDBCol md="6" lg="6" className="mb-3 mb-lg-0">
                        <MDBListGroup flush>
                          <MDBListGroupItem
                            tag="a"
                            href="/Air-Cooled-Series"
                            action
                            id="Navbar-16"
                          >
                            Air Cooled Series
                          </MDBListGroupItem>
                          <MDBListGroupItem
                            tag="a"
                            href="/Air-Cooled-CEV-125-Series"
                            action
                            id="Navbar-19"
                          >
                            Air Cooled CEV 125 Series
                          </MDBListGroupItem>
                          <MDBListGroupItem
                            tag="a"
                            href="/Air-Cooled-CEV-140-Series"
                            action
                            id="Navbar-19"
                          >
                            Air Cooled CEV 140 Series
                          </MDBListGroupItem>
                          <MDBListGroupItem
                            tag="a"
                            href="/Air-Cooled-CEV-180-Series"
                            action
                            id="Navbar-19"
                          >
                            Air Cooled CEV 180 Series
                          </MDBListGroupItem>
                          <MDBListGroupItem
                            tag="a"
                            href="/Air-Cooled-CEV-240-Series"
                            action
                            id="Navbar-19"
                          >
                            Air Cooled CEV 240 Series
                          </MDBListGroupItem>
                          <MDBListGroupItem
                            tag="a"
                            href="/Air-Cooled-CEV-300-Series"
                            action
                            id="Navbar-19"
                          >
                            Air Cooled CEV 300 Series
                          </MDBListGroupItem>
                          <MDBListGroupItem
                            tag="a"
                            href="/Air-Cooled-CEV-360-Series"
                            action
                            id="Navbar-19"
                          >
                            Air Cooled CEV 360 Series
                          </MDBListGroupItem>
                          <MDBListGroupItem
                            tag="a"
                            href="/Air-Cooled-CEV-440-Series"
                            action
                            id="Navbar-19"
                          >
                            Air Cooled CEV 440 Series
                          </MDBListGroupItem>
                          <MDBListGroupItem
                            tag="a"
                            href="/Air-Cooled-CEV-440A-Series"
                            action
                            id="Navbar-19"
                          >
                            Air Cooled CEV 440A Series
                          </MDBListGroupItem>
                        </MDBListGroup>
                      </MDBCol>
                      <MDBCol md="6" lg="6" className="mb-3 mb-lg-0">
                        <MDBListGroup flush>
                          <MDBListGroupItem
                            tag="a"
                            href="/Water-Cooled-Series"
                            action
                            id="Navbar-16"
                          >
                            Water Cooled Series
                          </MDBListGroupItem>
                          <MDBListGroupItem
                            tag="a"
                            href="/Water-Cooled-CEV-500-Series"
                            action
                            id="Navbar-19"
                          >
                            Water Cooled CEV 500 Series
                          </MDBListGroupItem>
                          <MDBListGroupItem
                            tag="a"
                            href="/Water-Cooled-CEV-590-Series"
                            action
                            id="Navbar-19"
                          >
                            Water Cooled CEV 590 Series
                          </MDBListGroupItem>
                          <MDBListGroupItem
                            tag="a"
                            href="/Water-Cooled-CEV-760-Series"
                            action
                            id="Navbar-19"
                          >
                            Water Cooled CEV 760 Series
                          </MDBListGroupItem>
                          <MDBCol md="6" lg="12" className="mb-3 mb-lg-0" id="Navbar-15">
                            <MDBListGroup flush>
                              <MDBListGroupItem
                                tag="a"
                                href="/Head-Expander"
                                action
                                id="Navbar-14"
                              >
                                Head Expander
                              </MDBListGroupItem>
                              <MDBListGroupItem
                                tag="a"
                                href="/Power-Amplifier"
                                action
                                id="Navbar-14"
                              >
                                Power Amplifier
                              </MDBListGroupItem>
                              <MDBListGroupItem
                                tag="a"
                                href="/Vibration-Controller"
                                action
                                id="Navbar-14"
                              >
                                Vibration Controller
                              </MDBListGroupItem>
                            </MDBListGroup>
                          </MDBCol>
                        </MDBListGroup>
                      </MDBCol>
                    </MDBRow>
                  </MDBContainer>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>
            <MDBNavbarItem className="position-static">
              <MDBDropdown>
                <MDBDropdownToggle tag="a" className="nav-link" id="Navbar-3">
                  New Categories
                </MDBDropdownToggle>
                <MDBDropdownMenu
                  className="mt-0 justify-content-center"
                  style={{
                    borderTopLeftRadius: "0",
                    borderTopRightRadius: "0",
                  }}
                >
                  <MDBContainer id="Navbar-17">
                    <MDBRow className="my-4">
                      <MDBCol md="12" lg="12" className="mb-3 mb-lg-0">
                        <MDBListGroup flush>
                          <MDBListGroupItem
                            tag="a"
                            href="/Centrifuge-Acceleration-Test-Machine"
                            action
                            id="Navbar-18"
                          >
                            Centrifuge Acceleration Test Machine
                          </MDBListGroupItem>
                          <MDBListGroupItem
                            tag="a"
                            href="/Bump-Test-Machine"
                            action
                            id="Navbar-18"
                          >
                            Bump Test Machine
                          </MDBListGroupItem>
                          <MDBListGroupItem
                            tag="a"
                            href="/Integrated-Environmental-Chamber"
                            action
                            id="Navbar-18"
                          >
                            Integrated Environmental Chamber
                          </MDBListGroupItem>
                          <MDBListGroupItem
                            tag="a"
                            href="/Pneumatic-Shock-Testing-Machine"
                            action
                            id="Navbar-18"
                          >
                            Pneumatic Shock Testing Machine
                          </MDBListGroupItem>
                          <MDBListGroupItem
                            tag="a"
                            href="/Underwater-Acoustic-Test-Capabilities"
                            action
                            id="Navbar-18"
                          >
                            Underwater Acoustic Test Capabilities
                          </MDBListGroupItem>
                        </MDBListGroup>
                      </MDBCol>
                    </MDBRow>
                  </MDBContainer>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>
          </MDBNavbarNav>
          <MDBNavbarNav className="d-flex input-group w-auto">
            <MDBNavbarItem>
              <MDBNavbarLink
                id="navbar-link"
                href="/Services"
                tabIndex={-1}
                aria-disabled="true"
                className="Navbar-0-3"
              >
                Services
              </MDBNavbarLink>
            </MDBNavbarItem>
            
          </MDBNavbarNav>
          <MDBNavbarNav className="d-flex input-group w-auto">
            <MDBNavbarItem id="Navbar-10">
              <MDBNavbarLink
                id="navbar-link"
                href="/Contact-Us"
                tabIndex={-1}
                aria-disabled="true"
                className="Navbar-0-3"
              >
                Contact Us
              </MDBNavbarLink>
            </MDBNavbarItem>
            
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
};
export default Header;
