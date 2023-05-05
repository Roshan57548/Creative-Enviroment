import React from 'react'
import './Style/OtherProduct.css';
import Section1 from '../Bump Test Machine/Component/Section1';
import Section2 from '../Bump Test Machine/Component/Section2';
import Section4 from '../Bump Test Machine/Component/Section4';
import Section6 from '../Bump Test Machine/Component/Section6';
import Section5 from './Components/Section5';
import ContentOtherProduct from './Content/ContentOtherProduct';
const OtherProduct = () => {
  return (
    <div>
      <Section1 data={ContentOtherProduct}/>
      <Section2 data={ContentOtherProduct}/>
      <Section4 data={ContentOtherProduct}/>
      <Section5 data={ContentOtherProduct}/>
      <Section6 data={ContentOtherProduct}/>
    </div>
  )
}

export default OtherProduct