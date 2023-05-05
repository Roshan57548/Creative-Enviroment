import React from 'react'
import './Style/Vibration.css';
import Section1 from './Components/Section1';
import Section2 from './Components/Section2';
import Section3 from './Components/Section3';
import Section5 from './Components/Section5';
import Section6 from './Components/Section6';
import Section7 from './Components/Section7';
import ContentVibration from './Content/ContentVibration';
const Vibration = () => {
  return (
    <div>
      <Section1 data={ContentVibration}/>
      <Section2 data={ContentVibration}/>
      <Section3 data={ContentVibration}/>
      <Section5 data={ContentVibration}/>
      <Section6 data={ContentVibration}/>
      <Section7 data={ContentVibration}/>
    </div>
  )
}

export default Vibration