import React from 'react'
import './Style/Services.css';
import RepairService from './Componant/RepairService';
import SpectrumServices from './Componant/SpectrumServices';
import DefiningServices from './Componant/DefiningServices';
<<<<<<< HEAD
import  SpectrumServices_content from './Content/SpectrumServices';
const Services = () => {
  return (
    <div>
      <RepairService />
      <SpectrumServices data={SpectrumServices_content} />
=======
import RepairServices from './Content/RepairServices';
const Services = () => {
  return (
    <div>
      <RepairService data={RepairServices}/>
      {/* <SpectrumServices /> */}
>>>>>>> e2f7984f815125d04a62a5edcd05a99680e2ac6b
      <DefiningServices />
    </div>
  )
}

export default Services