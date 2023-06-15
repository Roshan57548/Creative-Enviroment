/* eslint-disable no-unused-vars */
import React from 'react'
import "./Style/Section1.css"
import { useNavigate } from "react-router-dom";
import Image_1 from './Image/Image_1.png';
const Section1 = () => {
  const navigate = useNavigate();
 
  const HandleClick2 = () => {
    navigate('https://kemo.com/wp-content/uploads/2023/04/Kemo-Product-Guide-2023-online.pdf');
  }
  return (
    <>
    <div className="section1_container">
    <div className="section1_bgcolor">
        <div className="section1_wrapper">
            <div className="section1_image">
                <img className='section1_img' src={Image_1} alt="" />
            </div>
            <div className="section1_textarea">
                <h2>CENVS is Authorised supplier of Kemo Limited’s.</h2>
                <h2 className='section1_main_heading'>Full range of products which includes Accelerometers,Electronic Signal Filtering, Signal Conditioning Solutions and other related Accessories.</h2>
                {/* <h5 className='section1_sub_heading'>High Performance & Inherent Reliability.</h5> */}
                <div className="first-link">

                <h5 className=''>To check out full details of various products and service please </h5>
                <a href='https://kemo.com/' className='section1_btn '>Visit Here</a>
                </div>
                <h5 className='Second-link'>To download product guide <a href='https://kemo.com/wp-content/uploads/2023/04/Kemo-Product-Guide-2023-online.pdf' className='section1_btn'>Click on</a></h5>
                {/* <button onClick={HandleClick} className='section1_btn'>GET INFO TODAY!</button> */}
            </div>
        </div>
        </div>
    </div>

    </>
  )
}

export default Section1