import React from 'react'
import './Style/Section4.css'

const Section4 = (props) => {
  return (
    <div className='section4_container'>
        <div className="section4_wrapper">
            <div >
                <img className="section4_img1" src={props.data.src1} alt="" />
            </div>
            <div className="section4_img2">
                <img className="section4_img2" src={props.data.src2} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Section4