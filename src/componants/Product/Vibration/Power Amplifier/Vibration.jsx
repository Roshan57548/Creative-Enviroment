import React from 'react'
import './Style/Vibration.css';
import Section1 from './Components/Section1';
import Section2 from './Components/Section2';
import Section3 from './Components/Section3';
import Section4 from './Components/Section4';
import Section7 from './Components/Section7';
import Section8 from './Components/Section8';
import Section9 from './Components/Section9';
import ContentVibration from './Content/ContentVibration';
const Vibration = () => {
  return (
    <div className='PowerAmplifier'>
     <Section1 data={ContentVibration}/>
     <Section2 data={ContentVibration}/>
     <Section3 data={ContentVibration}/>
     <Section4 data={ContentVibration.section4}/>
     <Section4 data={ContentVibration.section5}/>
     <Section4 data={ContentVibration.section6}/>
     <Section4 data={ContentVibration.section7}/>
     <Section7 data={ContentVibration.section8}/>
     <Section7 data={ContentVibration.section9}/>
     <Section7 data={ContentVibration.section10}/>
     <Section4 data={ContentVibration.section11}/>
     <Section4 data={ContentVibration.section12}/>
     <Section4 data={ContentVibration.section13}/>
     <Section8 data={ContentVibration}/>
     <Section9 data={ContentVibration}/>
    </div>
  )
}

export default Vibration