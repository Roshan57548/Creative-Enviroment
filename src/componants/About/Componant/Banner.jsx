import React from 'react'
import './Style/Banner.css';
import Image from "../Images/banner_image3.png"
import Image1 from "../Images/demo_image.jpg"
const Banner = (props) => {
  return (
    <div className='main_container'>
    <img src={Image1} alt='my_img' className='img-fluid banner_img'/>
    <div className='row mx-4 text_container_aboutus'><h1>About Us</h1> </div>
      <div className='text_container_content'><h4>{props.data.Links[0].msg1}</h4> </div>
    </div>
  )
}
export default Banner
