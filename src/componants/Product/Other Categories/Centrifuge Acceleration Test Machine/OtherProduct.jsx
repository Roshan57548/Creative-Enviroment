import React from 'react'
import './Style/OtherProduct.css';
import Section1 from '../Bump Test Machine/Component/Section1';
import Section2 from '../Centrifuge Acceleration Test Machine/Components/Section2';
import Section6 from '../Centrifuge Acceleration Test Machine/Components/Section6';
import Section5 from '../Centrifuge Acceleration Test Machine/Components/Section5';
import ContentOtherProduct from './Content/ContentOtherProduct';
const OtherProduct = () => {
  return (
    <div className='Centrifuge-Others'>
      <Section1 data={ContentOtherProduct}/>
      <Section2 data={ContentOtherProduct}/>
      <Section6 data={ContentOtherProduct}/>
      <Section5 data={ContentOtherProduct}/>
    </div>
  )
}

export default OtherProduct