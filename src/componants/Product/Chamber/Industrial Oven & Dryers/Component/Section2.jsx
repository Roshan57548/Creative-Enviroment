import React from 'react'
import './Style/Section2.css'

const Section2 = (props) => {
  return (
    <div className='iod_container'>
        <div className="iod_wrapper">
            <h3 className='iod_heading'>{props.data.heading}</h3>
            <div className="iod_scn">
            <div className="iod_left">
                <p>{props.data.desc}</p>
            </div>
            <div >
                <p><img className="iod_right" src={props.data.src} alt="" /></p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Section2