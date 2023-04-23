import React from 'react'
import './Style/ContactUs.css';
import Border from './Componant/Border';
import MapContent from './Componant/MapContent';
import Form from './Componant/Form';
import ContentBorder from './Content/ContentBorder';
import ContentOurPresence from './Content/ContentOurPresence';
import OurPresence from './Componant/OurPresence';
const ContactUs = () => {
  return (
    <div>
      <Border data={ContentBorder}/>
      <Form />
      <OurPresence data={ContentOurPresence} />
      <MapContent />
      
    </div>
  )
}

export default ContactUs