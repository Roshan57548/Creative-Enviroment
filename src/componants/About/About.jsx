import React from "react";
import "./Style/About.css";
import Banner from "./Componant/Banner";
import CompanyDetails from "./Componant/CompanyDetails";
import OurVision from "./Componant/OurVision";
// import MissionValue from "./Componant/MissionValue";
// import OurFounders from "./Componant/OurFounders";
// import StateOfCity from "./Componant/StateOfCity";
import Banners from "./Content/Banners";
import CompanyDetail from "./Content/CompanyDetail";
import OurVisions from "./Content/OurVisions";
// import MissionValues from "./Content/MissionValues";
import ContactUs from '../../componants/Home/Componant/ContactUs';
import ContentContactUs from '../../componants/Home/Content/ContactUs';
const About = () => {
  return (
    <div className="About">
      <Banner data={Banners} />
      <CompanyDetails data={CompanyDetail} />
      <OurVision data={OurVisions} />
      {/* <MissionValue data={MissionValues}/> */}
      {/* <OurFounders /> */}
      {/* <StateOfCity />  */}
      <ContactUs data={ContentContactUs} />
    </div>
  );
};

export default About;
