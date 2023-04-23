import React from 'react'
import './Style/Services.css';
import RepairService from './Componant/RepairService';
import SpectrumServices from './Componant/SpectrumServices';
import DefiningServices from './Componant/DefiningServices';
import RepairServices from './Content/RepairServices';
const Services = () => {
  return (
    <div className='Service'>
      <RepairService data={RepairServices}/>
      {/* <SpectrumServices /> */}
      <DefiningServices />
    </div>
  )
}

export default Services