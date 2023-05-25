import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Company_logo from "../../../src/Image/Company-Logo/Company_logo.png";
import { useNavigate } from "react-router-dom";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ContentHeader from "./Content/ContentHeader";
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

  const OpenNav22 = () => {
    if(showme===false){
      return setShowme(true);
    }
    else{
      return setShowme(false);
    }
    
  };

  const CloseNav2 = () => {
    return setShowme(true);
  };

  const OpenNav3 = () => {
    return setShowme2(false);
  };

  const OpenNav33 = () => {
    if(showme2===false){
      return setShowme2(true);
    }
    else{
      return setShowme2(false);
    }
  };

  const CloseNav3 = () => {
    return setShowme2(true);
  };

  const OpenNav4 = () => {
    return setShowme3(false);
  };

  const OpenNav44 = () => {
    if(showme3===false){
      return setShowme3(true);
    }
    else{
      return setShowme3(false);
    }
    
  };

  const CloseNav4 = () => {
    return setShowme3(true);
  };

  const OpenNav5 = () => {
    return setShowme5(false);
  };

  const OpenNav55 = () => {
    if(showme5===false){
      return setShowme5(true);
    }
    else{
      return setShowme5(false);
    }
  };

  const CloseNav5 = () => {
    return setShowme5(true);
  };

  const OpenNav6 = () => {
    
    return setShowme6(false);
  };

  const OpenNav66 = () => {
    if(showme6===false){
      return setShowme6(true);
    }
    else{
      return setShowme6(false);
    }
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

  const RouteLink = (index) => {
    return navigate(ContentHeader.EnvironmentalTestChambers[index].Link);
  };

  const RouteLink2 = (index) => {
    return navigate(ContentHeader.AirCooledSeries[index].Link);
  };

  const RouteLink3 = (index) => {
    return navigate(ContentHeader.OtherCategories[index].Link);
  };

  const RouteLink4 = (index) => {
    return navigate(ContentHeader.WaterCooledSeries[index].Link);
  };
  

  let Navdata;
  Navdata = ContentHeader.EnvironmentalTestChambers.map((rowdata, index) => {
    return (
      <Nav.Link eventKey={6+index} className="col-lg-6 col-md-12" onClick={()=>RouteLink(index)} id="Navbar-9">
        {rowdata.Heading}
      </Nav.Link>
    );
  });

  let Navdata2;
  Navdata2 = ContentHeader.OtherCategories.map((rowdata, index) => {
    return (
      <Nav.Link eventKey={21+index} className="col-lg-12" onClick={()=>RouteLink3(index)} id="Navbar-9-1">
        {rowdata.Heading}
      </Nav.Link>
    );
  });

  let Navdata3;
  Navdata3 = ContentHeader.AirCooledSeries.map((rowdata, index) => {
    return (
      <Nav.Link eventKey={26+index} className="col-lg-12" onClick={()=>RouteLink2(index)} id="Navbar-9-2">
        {rowdata.Heading}
      </Nav.Link>
    );
  });

  let Navdata4;
  Navdata4 = ContentHeader.WaterCooledSeries.map((rowdata, index) => {
    return (
      <Nav.Link eventKey={34+index} className="col-lg-12" onClick={()=>RouteLink4(index)} id="Navbar-9-2">
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
        <Navbar.Brand onClick={() => navigate("/")}>
          <img src={Company_logo} className="nabvar-image"></img>
        </Navbar.Brand>
        <Navbar.Toggle  aria-controls="basic-navbar-nav" id="Navbar-09"/>
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="Header-2">
            <Nav.Link eventKey={1} onClick={() => navigate("/")} id="Header-3">
              Home
            </Nav.Link>
            <Nav.Link eventKey={2} onClick={() => navigate("/About-Us")}  id="Header-3" >
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
                    
                    id="Header-7"
                    onClick={OpenNav22}
                    onMouseEnter={OpenNav2}
                    onMouseLeave={CloseNav2}
                    
                  >
                    <KeyboardArrowLeftIcon id="Header-none" style={{float: "left"}}/>
                    Environmental Test Chambers
                    <KeyboardArrowRightIcon id="Header-none-1" style={{float: "right"}}/>
                    <KeyboardArrowDownIcon id="Header-none-2" style={{float: "right"}}/>
                    
                    
                  </Nav.Link>
                  <Nav onMouseEnter={OpenNav2} onMouseLeave={CloseNav2} hidden={showme} id="Header-8" className="row">
                    <div className="col-12 row">{Navdata}</div>
                  </Nav>
                  
                </div>
                <div className="col-12 Header-Other">
                  <Nav.Link
                    onClick={OpenNav44}
                    onMouseEnter={OpenNav4}
                    onMouseLeave={CloseNav4}
                    id="Header-7"
                  >
                    <KeyboardArrowLeftIcon id="Header-none" style={{float: "left"}}/>
                    Electro-Dynamic Vibration System
                    <KeyboardArrowRightIcon id="Header-none-1" style={{float: "right"}}/>
                    <KeyboardArrowDownIcon id="Header-none-2" style={{float: "right"}}/>
                    
                  </Nav.Link>
                    <Nav onMouseEnter={OpenNav4} onMouseLeave={CloseNav4} hidden={showme3} id="Header-8-1" className="row">
                      <div className="col-12 row ">
                        <Nav.Link
                          className="col-12"
                          
                          id="Navbar-9-1"
                          onClick={OpenNav55}
                          onMouseEnter={OpenNav5}
                          onMouseLeave={CloseNav5}
                        >
                          <KeyboardArrowLeftIcon id="Header-none" style={{float: "left"}}/>
                          Air Cooled Series
                          <KeyboardArrowRightIcon id="Header-none-1" style={{float: "right"}}/>
                          <KeyboardArrowDownIcon id="Header-none-2" style={{float: "right"}}/>
                          
                        </Nav.Link>
                        <Nav onMouseEnter={OpenNav5} onMouseLeave={CloseNav5} hidden={showme5} id="Header-8-2" className="row">
                          <div className="col-12 row Header-8-2-1">{Navdata3}</div>
                        </Nav>
                        <Nav.Link
                          className="col-12"
                          id="Navbar-9-2"
                          onClick={OpenNav66}
                          onMouseEnter={OpenNav6}
                          onMouseLeave={CloseNav6}
                        >
                          <KeyboardArrowLeftIcon id="Header-none" style={{float: "left"}}/>
                          Water Cooled Series
                          <KeyboardArrowRightIcon id="Header-none-1" style={{float: "right"}}/>
                          <KeyboardArrowDownIcon id="Header-none-2" style={{float: "right"}}/>
                          
                          </Nav.Link>
                          <Nav onMouseEnter={OpenNav6} onMouseLeave={CloseNav6} hidden={showme6} id="Header-8-2" className="row">
                            <div className="col-12 row">{Navdata4}</div>
                          </Nav>
                        
                        <Nav.Link
                          eventKey={37}
                          className="col-12"
                          onClick={()=>navigate("/Vibration/Head-Expander")}
                          id="Navbar-9-1"
                        >
                          Head Expander
                        </Nav.Link>
                        <Nav.Link
                        eventKey={38}
                          className="col-12"
                          onClick={()=>navigate("/Vibration/Power-Amplifier")}
                          id="Navbar-9-1"
                        >
                          Power Amplifier
                        </Nav.Link>
                        <Nav.Link
                        eventKey={39}
                          className="col-12"
                          onClick={()=>navigate("/Vibration/Vibration-Controller")}
                          id="Navbar-9-1"
                        >
                          Vibration Controller
                        </Nav.Link>
                      </div>
                    </Nav>
                  
                </div>
                <div className="col-12 Header-Other">
                  <Nav.Link
                    onClick={OpenNav33}
                    onMouseEnter={OpenNav3}
                    onMouseLeave={CloseNav3}
                    id="Header-7"
                  >
                    <KeyboardArrowLeftIcon id="Header-none" style={{float: "left"}}/>
                    Other Categories
                    <KeyboardArrowRightIcon id="Header-none-1" style={{float: "right"}}/>
                    <KeyboardArrowDownIcon id="Header-none-2" style={{float: "right"}}/>
                    
                    </Nav.Link>
                    <Nav onMouseEnter={OpenNav3} onMouseLeave={CloseNav3} hidden={showme2} id="Header-8-1" className="row">
                      <div className="col-12 row">{Navdata2}</div>
                    </Nav>
                  
                </div>
              </Nav>
            </Nav.Link>
            <Nav.Link eventKey={3} onClick={() => navigate("/Industries")} id="Header-5">
             Industries
            </Nav.Link>
            <Nav.Link eventKey={4} onClick={() => navigate("/Services")} id="Header-3">
              Services
            </Nav.Link>
            <Nav.Link eventKey={5} onClick={() => navigate("/Contact-Us")} id="Header-3">
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header2;
