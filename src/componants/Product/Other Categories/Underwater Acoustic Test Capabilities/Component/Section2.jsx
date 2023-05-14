/* eslint-disable react/prop-types */
import React from 'react'
import './Style/Section2.css'

const Section2 = (props) => {
  return (
<div className="s2_ua_container">
<div className="s2_ua_wrapper">
<h3 className='s2_ua_heading'>{props.data.heading}</h3>
<p  className='s2_ua_para'> {props.data.para}</p>
</div>
</div>
  )
}

export default Section2