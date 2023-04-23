import React from 'react'
import './Style/OurPartners.css';
import Border from './Componant/Border';
import MapContent from './Componant/MapContent';
import ContentBorder from './Content/ContentBorder';
const OurPartners = () => {
  return (
    <div>
      <Border data={ContentBorder}/>
      <MapContent />
    </div>
  )
}

export default OurPartners