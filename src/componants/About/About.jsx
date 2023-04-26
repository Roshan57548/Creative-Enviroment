import React from "react";
import "./Style/About.css";
import Banner from "./Componant/Banner";
import CompanyDetails from "./Componant/CompanyDetails";
import OurVision from "./Componant/OurVision";
import OurFounders from "./Componant/OurFounders";
import MissionValue from "./Componant/MissionValue";
import StateOfCity from "./Componant/StateOfCity";
import Banners from "./Content/Banners";
import CompanyDetail from "./Content/CompanyDetail";
import OurVisions from "./Content/OurVisions";
import OurFounder from "./Content/OurFounders";
import MissionValues from "./Content/MissionValues";
import ContactUs from '../Home/Componant/ContactUs'
const About = () => {
  return (
    <div>
      <Banner data={Banners} />
      <CompanyDetails data={CompanyDetail} />
      <OurVision data={OurVisions} />
      <MissionValue data={MissionValues}/>
      <StateOfCity />
      <OurFounders data={OurFounder} />
      
      <ContactUs />
      
    </div>
  );
};

export default About;
