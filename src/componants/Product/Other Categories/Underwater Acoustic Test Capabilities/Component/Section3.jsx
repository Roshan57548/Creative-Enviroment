/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import './Style/Section3.css'

const Section3 = (props) => {
  return (
    <div className='s3_ua_container'>
        <div className="s3_ua_wrapper">
            <div className="s3_ua_left">
                <h4 className='s3_ua_heading'>{props.data.heading1}</h4>
                <ul>
                    <li>{props.data.left1}</li>
                    <li>{props.data.left2}</li>
                    <li>{props.data.left3}</li>
                    <li>{props.data.left4}</li>
                    <li>{props.data.left5}</li>
                </ul>
            </div>
            <div className="s3_ua_right">
            <h4 className='s3_ua_heading'>{props.data.heading2}</h4>
                <ul>
                    <li>{props.data.right1}</li>
                    <li>{props.data.right2}</li>
                    <li>{props.data.right3}</li>
                    <li>{props.data.right4}</li>
                    <li>{props.data.right5}</li>
                    <li>{props.data.right6}</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Section3