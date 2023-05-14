import React from 'react'
import './Style/OtherProduct.css';
import Section1 from './Components/Section1';
import ContentOtherProduct from './Content/ContentOtherProduct';
import Section2 from './Components/Section2';
import Section3 from './Components/Section3';
import Section5 from './Components/Section5';
const OtherProduct = () => {
  return (
    <div>
      <Section1 data={ContentOtherProduct} />
      <Section2 data={ContentOtherProduct} />
      <Section3 data={ContentOtherProduct} />
      <Section5 data={ContentOtherProduct} />
    </div>
  )
}

export default OtherProduct