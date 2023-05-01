import React from 'react'
import './Style/Chamber.css';
import Section1 from './Component/Section1';
import Section2 from './Component/Section2';
import Section3 from './Component/Section3';
import Section1_content from './Content/Section1_content';
import Section2_content from './Content/Section2_content';
import Section3_content from './Content/Section3_content';
const Chamber = () => {
  return (
    <>
      <Section1 data={Section1_content}/>
      <Section2 data={Section2_content}/>
      <Section3 data={Section3_content}/>
    </>
  )
}

export default Chamber