import React from 'react'
import './Style/Chamber.css';
import Section1 from './Component/Section1';
import Section2 from './Component/Section2';
import Section4 from './Component/Section4';
import Section5 from './Component/Section5';
import Section3 from './Component/Section3';
import Sectionss1 from './Content/Section1';
import Sectionss2 from './Content/Section2';
import Sectionss3 from './Content/Section3';
const Chamber = () => {
  return (
    <div className='Industrial-Oven'>
      <Section1 data={Sectionss1}/>
      <Section2 data={Sectionss2}/>
      <Section3 data={Sectionss3}/>
      <Section4/>
      <Section5/>
    </div>
  )
}

export default Chamber