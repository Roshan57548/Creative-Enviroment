/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import './Style/Section4.css'

const Section4 = (props) => {
  return (
    <div className='s4_ua_container'>
        <div className="s4_ua_wrapper">
            <h3 className='s4_ua_heading'>{props.data.heading}</h3>
            <p>{props.data.para1}</p>
<p>{props.data.para2}</p>
<p>{props.data.para3}</p>
        </div>
    </div>
  )
}

export default Section4