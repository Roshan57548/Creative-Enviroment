import React from 'react'
import "./Style/Section1.css"

const Section1 = () => {
  return (
    <>
    <div className="section1_container">
        <div className="section1_wrapper">
            <div className="section1_image">
                <img className='section1_img' src="https://www.envisystech.com/storage/app/media/newslider/ET-600.png" alt="" />
            </div>
            <div className="section1_textarea">
                <h5>ET-SERIES (MID-RANGE)</h5>
                <h2 className='section1_main_heading'>Custom Environmental Test Chambers Manufacturers & Suppliers</h2>
                <h5 className='section1_sub_heading'>High Performance & Inherent Reliability.</h5>
                <h6 className='section1_link'>EASY SET-UP | 24/7 TECHNICAL SUPPORT</h6>
                <button className='section1_btn'>GET INFO TODAY!</button>
            </div>
        </div>
    </div>

    </>
  )
}

export default Section1