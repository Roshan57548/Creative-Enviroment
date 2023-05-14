import React from "react";
import "./Style/Section1.css";
import { useNavigate } from "react-router-dom";
import Image_1 from './Image/image_1.png'
const Section1 = (props) => {
  const navigate = useNavigate();
  const HandleClick = () => {
    navigate('/Contact-Us');
  }
  return (
    <>
      <div id="Salt-spray">
        <div className="section1_bgcolor">
          <div className="section1_wrapper">
            <div className="section1_image">
              <img
                className="section1_img"
                src={Image_1}
                alt=""
              />
            </div>
            <div className="section1_textarea">
              <h5>EBS/ECS- SERIES</h5>
              <h2 className="section1_main_heading">
                Salt Spray Fog Test Chamber | Mist Cyclic Corrosion Test Chamber
              </h2>
              <h5 className="section1_sub_heading">
                Corrosive Resistance Testing of Your Products...
              </h5>
              <h6 className="section1_link">
                EASY SET-UP | 18/7 TECHNICAL SUPPORT
              </h6>
              <button onClick={HandleClick} className="section1_btn">GET INFO TODAY!</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section1;
