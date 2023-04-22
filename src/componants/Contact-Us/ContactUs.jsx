import React from 'react'
import './Style/ContactUs.css';
import Border from './Componant/Border';
import MapContent from './Componant/MapContent';
import Form from './Componant/Form';
import ContentBorder from './Content/ContentBorder';
const ContactUs = () => {
  return (
    <div>
      <Border data={ContentBorder}/>
      <Form />
      <MapContent />
      
    </div>
  )
}

export default ContactUs