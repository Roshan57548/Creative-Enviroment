/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import './Style/Section6.css'

const Section6 = (props) => {
  return (
    <div className='s6_ua_container'>
        <div className="s6_ua_wrapper">
            <h3 className='s6_ua_heading'>{props.data.heading}</h3>
            <p className='s6_ua_para'>{props.data.para}</p>
        </div>
    </div>
  )
}

export default Section6