import React from 'react'
import './Style/OurPartners.css';
import Border from './Componant/Border';
import MapContent from './Componant/MapContent';
import ContentBorder from './Content/ContentBorder';
import Contact from '../Home/Content/ContactUs';
import ContactUs from '../Home/Componant/ContactUs';
const OurPartners = () => {
  return (
    <div>
      <Border data={ContentBorder}/>
      <MapContent />
      <ContactUs data={Contact}/>
    </div>
  )
}

export default OurPartners