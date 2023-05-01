import React from 'react'
import './Style/OurPartners.css';
import Border from './Componant/Border';
import MapContent from './Componant/MapContent';
import ContentBorder from './Content/ContentBorder';
import Contact from '../Home/Content/ContactUs';
import ContactUs from '../Home/Componant/ContactUs';
import ContentMapContent from './Content/ContentMapContent'
import Industries from './Componant/Industries';
import ContentIndustries from './Content/ContentIndustries';
const OurPartners = () => {
  return (
    <div>
      <Border data={ContentBorder} />
      <Industries data={ContentIndustries} />
      <MapContent data={ContentMapContent} />
      <ContactUs data={Contact} />
    </div>
  );
}

export default OurPartners