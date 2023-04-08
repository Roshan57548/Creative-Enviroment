import React from 'react'
import './Style/Services.css';
import RepairService from './Componant/RepairService';
import SpectrumServices from './Componant/SpectrumServices';
import DefiningServices from './Componant/DefiningServices';
const Services = () => {
  return (
    <div>
      <RepairService />
      <SpectrumServices />
      <DefiningServices />
    </div>
  )
}

export default Services