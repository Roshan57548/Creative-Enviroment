import React from 'react'
import './Style/Vibration.css';
import Section1 from '../../Vibration/Air Cooled CEV 125 Series/Components/Section1';
import { Water } from './Content/Section1';
import Description from './Component/Description';
import { DescriptionCon } from './Content/Description';
import WaterMappedImage from './Component/WaterMapped';
import WaterMapContent from './Content/WaterMappedContent';
const Vibration = () => {
  return (
    <div>
      <Section1 data={Water}/>
      <Description data={DescriptionCon}/>
      <WaterMappedImage data={WaterMapContent}/>
    </div>
  )
}

export default Vibration