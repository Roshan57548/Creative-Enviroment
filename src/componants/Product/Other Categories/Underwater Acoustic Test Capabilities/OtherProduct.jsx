import React from 'react'
import './Style/OtherProduct.css';
import Section1 from './Component/Section1';
import Section2 from './Component/Section2';
import Section3 from './Component/Section3';
import Section4 from './Component/Section4';
import Section5 from './Component/Section5';
import Section6 from './Component/Section6';
import Sections1 from './Content/Section1';
import Sections2 from './Content/Section2';
import Sections3 from './Content/Section3';
import Sections4 from './Content/Section4';
import Sections5 from './Content/Section5';
import Sections6 from './Content/Section6';
const OtherProduct = () => {
  return (
    <div>
      <Section1 data={Sections1}/>
      <Section2 data={Sections2}/>
      <Section3 data={Sections3}/>
      <Section4 data={Sections4}/>
      <Section5 data={Sections5}/>
      <Section6 data={Sections6}/>
    </div>
  )
}

export default OtherProduct