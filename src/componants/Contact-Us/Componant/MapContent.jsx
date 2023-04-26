import React from "react";
import "./Style/MapContent.css";
const MapContent = () => {
  return (
    <div className="contact-8">
      <iframe
        src="https://maps.google.com/maps?q=Shastri Nagar Ghaziabad&t=&z=10&ie=UTF8&iwloc=&output=embed"
        className="contact-9"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapContent;
