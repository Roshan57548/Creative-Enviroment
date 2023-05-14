import React from "react";
import "./Style/Section4.css";
import Image_1 from './Image/image_7.jpg'
 const Section4 = () => {
  return (
    <>
      <section class="section-wrap">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <img
                src={Image_1}
                alt="Salt Spray Chambers"
                class="img-responsive img-thumbnail"
              />
              <div class="space"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Section4