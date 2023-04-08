import React from 'react'
import './Style/About.css';
import Banner from './Componant/Banner';
import CompanyDetails from './Componant/CompanyDetails';
import OurVision from './Componant/OurVision';
import MissionValue from './Componant/MissionValue';
import OurFounders from './Componant/OurFounders';
import StateOfCity from './Componant/StateOfCity';
import CarryBig from './Componant/CarryBig';
const About = () => {
  return (
    <div>
      <Banner />
      <CompanyDetails />
      <OurVision />
      <MissionValue />
      <OurFounders />
      <StateOfCity />
      <CarryBig />
    </div>
  )
}

export default About