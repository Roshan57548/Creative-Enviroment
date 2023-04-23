import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Company_logo from "../../../src/Image/Company-Logo/Company_logo.png";
import { Menu, MenuItem, MenuButton, SubMenu } from "@szhsin/react-menu";
import { useNavigate } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import ContentHeader from "./Content/ContentHeader";
import "@szhsin/react-menu/dist/index.css";
import "./Style/Header2.css";
const Header2 = () => {
  const navigate = useNavigate();
  const [shows, setShow] = useState(true);
  const [showme, setShowme] = useState(true);
  const [showme2, setShowme2] = useState(true);
  const [showme3, setShowme3] = useState(true);
  const [showme5, setShowme5] = useState(true);
  const [showme6, setShowme6] = useState(true);

  const OpenNav = () => {
    return setShow(false);
  };

  const CloseNav = () => {
    return setShow(true);
  };

  const OpenNav2 = () => {
    return setShowme(false);
  };

  const CloseNav2 = () => {
    return setShowme(true);
  };

  const OpenNav3 = () => {
    return setShowme2(false);
  };

  const CloseNav3 = () => {
    return setShowme2(true);
  };

  const OpenNav4 = () => {
    return setShowme3(false);
  };

  const CloseNav4 = () => {
    return setShowme3(true);
  };

  const OpenNav5 = () => {
    return setShowme5(false);
  };

  const CloseNav5 = () => {
    return setShowme5(true);
  };

  const OpenNav6 = () => {
    return setShowme6(false);
  };

  const CloseNav6 = () => {
    return setShowme6(true);
  };

  const MoveLink2 = () => {
    return navigate("/Chamber/Environmental-Test-Chambers");
  };

  const MoveLink4 = () => {
    return navigate("/Vibration/Electrodynamic-Vibration-Shaker-System");
  };

  const MoveLink5 = () => {
    return navigate("/Vibration/Air-Cooled-Series");
  };

  const MoveLink6 = () => {
    return navigate("/Vibration/Water-Cooled-Series");
  };

  let Navdata;
  Navdata = ContentHeader.EnvironmentalTestChambers.map((rowdata, index) => {
    return (
      <Nav.Link className="col-6" href={rowdata.Link} id="Navbar-9">
        {rowdata.Heading}
      </Nav.Link>
    );
  });

  let Navdata2;
  Navdata2 = ContentHeader.OtherCategories.map((rowdata, index) => {
    return (
      <Nav.Link className="col-12" href={rowdata.Link} id="Navbar-9-1">
        {rowdata.Heading}
      </Nav.Link>
    );
  });

  let Navdata3;
  Navdata3 = ContentHeader.AirCooledSeries.map((rowdata, index) => {
    return (
      <Nav.Link className="col-12" href={rowdata.Link} id="Navbar-9-2">
        {rowdata.Heading}
      </Nav.Link>
    );
  });

  let Navdata4;
  Navdata4 = ContentHeader.WaterCooledSeries.map((rowdata, index) => {
    return (
      <Nav.Link className="col-12" href={rowdata.Link} id="Navbar-9-2">
        {rowdata.Heading}
      </Nav.Link>
    );
  });

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
      fixed="top"
      id="Navbars"
    >
      <Container>
        <Navbar.Brand href="/">
          <img src={Company_logo} className="nabvar-image"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" id="Navbar-09"/>
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="Header-2">
            <Nav.Link href="/" id="Header-3">
              Home
            </Nav.Link>
            <Nav.Link href="/About-Us" id="Header-3" >
              About Us
            </Nav.Link>
            <Nav.Link
              id="Header-3"
              onMouseEnter={OpenNav}
              onMouseLeave={CloseNav}
            >
              Products
              <ArrowDropDownIcon />
              <Nav hidden={shows} id="Header-6" className="row">
                <div className="col-12">
                  <Nav.Link
                    href="/Chamber/Environmental-Test-Chambers"
                    id="Header-7"
                    onClick={MoveLink2}
                    onMouseEnter={OpenNav2}
                    onMouseLeave={CloseNav2}
                  >
                    Environmental Test Chambers
                    <KeyboardDoubleArrowRightIcon />
                    <Nav hidden={showme} id="Header-8" className="row">
                      <div className="col-12 row">{Navdata}</div>
                    </Nav>
                  </Nav.Link>
                </div>
                <div className="col-12 Header-Other">
                  <Nav.Link
                    onClick={MoveLink4}
                    onMouseEnter={OpenNav4}
                    onMouseLeave={CloseNav4}
                    id="Header-7"
                  >
                    Electro-Dynamic Vibration System
                    <KeyboardDoubleArrowRightIcon />
                    <Nav hidden={showme3} id="Header-8-1" className="row">
                      <div className="col-12 row ">
                        <Nav.Link
                          className="col-12"
                          href="/Vibration/Air-Cooled-Series"
                          id="Navbar-9-1"
                          onClick={MoveLink5}
                          onMouseEnter={OpenNav5}
                          onMouseLeave={CloseNav5}
                        >
                          Air Cooled Series
                          <KeyboardDoubleArrowRightIcon />
                          <Nav hidden={showme5} id="Header-8-2" className="row">
                            <div className="col-12 row">{Navdata3}</div>
                          </Nav>
                        </Nav.Link>
                        <Nav.Link
                          className="col-12"
                          href="/Vibration/Water-Cooled-Series"
                          id="Navbar-9-2"
                          onClick={MoveLink6}
                          onMouseEnter={OpenNav6}
                          onMouseLeave={CloseNav6}
                        >
                          Water Cooled Series
                          <KeyboardDoubleArrowRightIcon />
                          <Nav hidden={showme6} id="Header-8-2" className="row">
                            <div className="col-12 row">{Navdata4}</div>
                          </Nav>
                        </Nav.Link>
                        <Nav.Link
                          className="col-12"
                          href="/Vibration/Head-Expander"
                          id="Navbar-9-1"
                        >
                          Head Expander
                        </Nav.Link>
                        <Nav.Link
                          className="col-12"
                          href="/Vibration/Power-Amplifier"
                          id="Navbar-9-1"
                        >
                          Power Amplifier
                        </Nav.Link>
                        <Nav.Link
                          className="col-12"
                          href="/Vibration/Vibration-Controller"
                          id="Navbar-9-1"
                        >
                          Vibration Controller
                        </Nav.Link>
                      </div>
                    </Nav>
                  </Nav.Link>
                </div>
                <div className="col-12 Header-Other">
                  <Nav.Link
                    onMouseEnter={OpenNav3}
                    onMouseLeave={CloseNav3}
                    id="Header-7"
                  >
                    Other Categories
                    <KeyboardDoubleArrowRightIcon />
                    <Nav hidden={showme2} id="Header-8-1" className="row">
                      <div className="col-12 row">{Navdata2}</div>
                    </Nav>
                  </Nav.Link>
                </div>
              </Nav>
            </Nav.Link>
            <Nav.Link href="Our-Partners" id="Header-5">
              Our Partners
            </Nav.Link>
            <Nav.Link href="/Services" id="Header-3">
              Services
            </Nav.Link>
            <Nav.Link href="/Contact-Us" id="Header-3">
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header2;
