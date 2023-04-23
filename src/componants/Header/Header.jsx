import React, { useState } from "react";
import { Menu, MenuItem, MenuButton, SubMenu } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
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
            <MDBNavbarItem>
              <Menu menuButton={<MenuButton>Products</MenuButton>}>
                <SubMenu label="Environmental Test Chamber">
                  <MenuItem href="/Environmental-Test-Chambers">Environmental Test Chambers</MenuItem>
                </SubMenu>
                <SubMenu label="Electro-Dynamic Vibration System">
                  <MenuItem>Electro-Dynamic Vibration System</MenuItem>
                </SubMenu>
                <SubMenu label="Other Categories">
                  <MenuItem>Environmental Test Chambers</MenuItem>
                </SubMenu>
              </Menu>
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
