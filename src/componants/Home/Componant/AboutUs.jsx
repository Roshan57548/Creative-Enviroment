import React from 'react'
import './Style/AboutUs.css';
const AboutUs = (props) => {
  
  return (
    <div className='home_aboutus_main'>
    <div className="home_about_wrapper">
      <div className="home_abt_left">
        <h3 className='home_abt_about'>{props.data.Heading}</h3>
        <h1 className='home_abt_heading'>{props.data.Sub_heading}</h1>
        <p className='home_abt_para'>{props.data.para}</p>
      </div>
      <div className="home_abt_right">
      <img className='home_abt_img' src={props.data.Image} alt="" />
      </div>
    </div>
    </div>
  )
}

export default AboutUs