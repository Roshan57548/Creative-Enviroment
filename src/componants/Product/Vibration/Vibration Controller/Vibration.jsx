import React from 'react'
import './Style/Vibration.css';
import Section1 from './Components/Section1';
import Section2 from './Components/Section2';
import Section3 from './Components/Section3';
import Section4 from './Components/Section4';
import Section10 from './Components/Section10';
import Section11 from './Components/Section11';
import Section12 from './Components/Section12';
import ContentVibration from './Content/ContentVibration';
const Vibration = () => {
  return (
    <div>
      <Section1 data={ContentVibration}/>
      <Section2 data={ContentVibration}/>
      <Section4 data={ContentVibration.section4}/>
      <Section4 data={ContentVibration.section5}/>
      <Section4 data={ContentVibration.section6}/>
      <Section3 data={ContentVibration.section7}/>
      <Section3 data={ContentVibration.section8}/>
      <Section3 data={ContentVibration.section9}/>
      <Section10 data={ContentVibration.section10}/>
      <Section3 data={ContentVibration.section11}/>
      <Section11 data={ContentVibration.section12}/>
      <Section11 data={ContentVibration.section13}/>
      <Section11 data={ContentVibration.section14}/>
      <Section11 data={ContentVibration.section15}/>
      <Section3 data={ContentVibration.section16}/>
      <Section12 data={ContentVibration}/>
    </div>
  )
}

export default Vibration