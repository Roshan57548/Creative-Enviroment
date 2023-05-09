import React from 'react'
import './Style/Vibration.css';
import ElectrodynamicMainComponent from './Component/ElectrodynamicMainComponent';
import ElectrodynamicMapContent from './Content/electroDynamicMapContent';
const Vibration = () => {
  return (
    <>
      <ElectrodynamicMainComponent data={ElectrodynamicMapContent}/> 
    </>
  )
}

export default Vibration