import React from 'react'
import './Style/Chamber.css';
import Section1 from './Component/Section1';
import Section2 from './Component/Section2';
import Section3 from './Component/Section3';
import Section4 from './Component/Section4';
import Section5 from './Component/Section5';
const Chamber = () => {
  return (
    <div  className='Dust-Chamber'>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
    </div>
  )
}

export default Chamber