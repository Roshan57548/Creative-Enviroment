import React from 'react'
import './Style/ContactUs.css';
import Border from './Componant/Border';
import MapContent from './Componant/MapContent';
import Form from './Componant/Form';
import OurPresence from './Componant/OurPresence';
const ContactUs = () => {
  return (
    <div>
      <Border />
      <Form />
      <OurPresence />
      <MapContent />
      
    </div>
  )
}

export default ContactUs