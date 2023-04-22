import React from "react";
import "./Style/About.css";
//components

import Banner from "./Componant/Banner";
import CompanyDetails from "./Componant/CompanyDetails";
import OurVision from "./Componant/OurVision";
import OurFounders from "./Componant/OurFounders";
// import MissionValue from "./Componant/MissionValue";
// import OurFounders from "./Componant/OurFounders";
import StateOfCity from "./Componant/StateOfCity";
import CarryBig from "./Componant/CarryBig";
import Banners from "./Content/Banners";
import CompanyDetail from "./Content/CompanyDetail";
import OurVisions from "./Content/OurVisions";
import OurFounder from "./Content/OurFounders";
// import MissionValues from "./Content/MissionValues";

const About = () => {
  return (
    <div>
      <Banner data={Banners} />
      <CompanyDetails data={CompanyDetail} />
      <OurVision data={OurVisions} />
      {/* <MissionValue data={MissionValues}/> */}
      {/* <OurFounders /> */}
      <StateOfCity /> 
      {/* <CarryBig /> */}
    </div>
  );
};

export default About;
