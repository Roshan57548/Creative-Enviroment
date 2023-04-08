import React from 'react'
import './Style/Home.css';
import Carousel from './Componant/Carousel';
import AboutUs from './Componant/AboutUs';
import TestChamber from './Componant/TestChamber';
import SolutionProvider from './Componant/SolutionProvider';
import CustomBuilt from './Componant/CustomBuilt';
import Distributors from './Componant/Distributors';
import ContactUs from './Componant/ContactUs';
const Home = () => {
  return (
    <div className='Home'>
      <Carousel />
      <AboutUs />
      <TestChamber />
      <SolutionProvider />
      <CustomBuilt />
      <Distributors />
      <ContactUs />

    </div>
  )
}

export default Home