import React from 'react'
import './Style/OtherProduct.css';
import Section1 from './Component/Section1';
import Section2 from './Component/Section2';
import Section3 from './Component/Section3';
import Section4 from './Component/Section4';
import Section5 from './Component/Section5';
import Section6 from './Component/Section6';
import Bump from './Content/OtherProduct'
const OtherProduct = () => {
  return (
    <div>
      <Section1 data={Bump}/>
      <Section2 data={Bump}/>
      <Section3 data={Bump}/>
      <Section4 data={Bump}/>
      <Section5 data={Bump}/>
      <Section6 data={Bump}/>
    </div>
  )
}

export default OtherProduct;