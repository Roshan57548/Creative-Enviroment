import React from "react";
import "./Style/Section1.css";
import Image_1 from './Image/image_3.jpg';
const Section3 = (props) => {
  return (
    <>
      <section>
        <div className="container">
        <div className="col-md-12 mb-3">
            <img src={Image_1}/>
        </div>
        </div>
      </section>
    </>
  );
};

export default Section3;
