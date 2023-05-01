import React from 'react'
import './Style/Services.css';
import Maintenance from './Componant/Maintenance';
import SpectrumServices from './Componant/SpectrumServices';
import SpectrumServices_content from './Content/SpectrumServices';
import Maintenance_content from './Content/Maintenance_content';
import Contact from '../Home/Content/ContactUs';
import ContactUs from '../Home/Componant/ContactUs';
import CustomerSupportServices from './Componant/CustomerSupportServices';
import CustomerSupportServices_content from './Content/CustomerSupportServices_content';
import Warranty from './Componant/Warranty';
import Warranty_content from './Content/Warranty_content';
import Installation from './Componant/Installation';
import Installation_content from './Content/Installation_content';
import Calibration from './Componant/Calibration';
import Calibration_content from './Content/Calibration_content';

const Services = () => {
  return (
    <div className='Service'>
      <CustomerSupportServices data={CustomerSupportServices_content}/>
      <SpectrumServices data={SpectrumServices_content} />
      <Maintenance data={Maintenance_content}/>
      <Installation data={Installation_content}/>
      <Calibration data={Calibration_content}/>
      <Warranty data={Warranty_content}/>     
      <ContactUs data={Contact}/>
    </div>
  )
}

export default Services