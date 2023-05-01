import React from 'react'
import './Style/Section5.css'

const Section5 = (props) => {
  return (
    <div className='section5_container'>
        <div className="section5_wrapper">
            <h6>{props.data.fixed}</h6>
            <h3 className='section5_main-heading'>{props.data.heading}</h3>
            <div className='section5_border'></div>
            <div>
                <img  className="section5_img" src={props.data.src} alt="" />
            </div>
            <div className="section5_desp">
                <p>{props.data.desc}</p>
            </div>
        </div>
    </div>
  )
}

export default Section5