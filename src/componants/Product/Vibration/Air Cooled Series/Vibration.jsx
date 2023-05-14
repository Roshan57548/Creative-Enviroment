import React from 'react'
import './Style/Vibration.css';
import Section1 from './Component/Section1';
import { Air } from './Content/Section1';
import DescriptionContent from './Component/DescriptionContent';
import { Description } from './Content/Description';
import AcMappedImage from './Component/AcMappedImage';
import AcMappedContent from './Content/AcMappedContent';

const Vibration = () => {
  return (
    <div>
     <Section1 data={Air}/>
     <DescriptionContent data={Description} />
     <AcMappedImage data={AcMappedContent}/>
    </div>
  )
}

export default Vibration