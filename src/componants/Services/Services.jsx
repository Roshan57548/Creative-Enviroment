import React from 'react'
import './Style/Services.css';
import RepairService from './Componant/RepairService';
import SpectrumServices from './Componant/SpectrumServices';
import DefiningServices from './Componant/DefiningServices';
import  SpectrumServices_content from './Content/SpectrumServices';
import RepairServices from './Content/RepairServices';
const Services = () => {
  return (
    <div>
      <RepairService data={RepairServices}/>
      <SpectrumServices data={SpectrumServices_content} />
      <DefiningServices />
    </div>
  )
}

export default Services