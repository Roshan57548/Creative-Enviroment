import React from "react";
import "./Style/ContactUs.css";
import data from "../Content/ContactUs";
import { useNavigate } from "react-router-dom";

const ContactUs = () => {
  const navigate = useNavigate();
  function goToContact() {
    navigate("/Contact-Us");
  }

  return (
    <div>
      <div className="contact">
        <div>
          <h4>{data.subHeading}</h4>
          <h1>{data.heading}</h1>
        </div>
        <div>
          <button onClick={goToContact}>Contact Us</button>
          {/* <button className="enquire-Button">Enquire Now</button> */}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
