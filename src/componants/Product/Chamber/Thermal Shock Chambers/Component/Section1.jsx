import React from 'react'
import "./Style/Section1.css"

const Section1 = (props) => {
  return (
    <>
    <div className="section1_container thermal-container">
    <div className="section1_bgcolor">  
        <div className="section1_wrapper ">
            <div className="section1_image">
                <img className='section1_img' src="https://www.envisystech.com/storage/app/media/inner-products/new-products/latest/thermal-shock-chambers/thermal-shock-chambers-latest-model-showcase3.png" alt="" />
            </div>
            <div className="section1_textarea">
                <h5>ET-SERIES (MID-RANGE)</h5>
                <h2 className='section1_main_heading'>Thermal Shock Test Environmental Chamber | Thermal\Temperature Cycling Chamber</h2>
                <h5 className='section1_sub_heading'>Environmental Stress Screening Tests using Envisys Thermal Shock Chambers.</h5>
                <h6 className='section1_link'>EASY SET-UP | 18/7 TECHNICAL SUPPORT</h6>
                <button className='section1_btn'>GET INFO TODAY!</button>
            </div>
        </div>
        </div>
    </div>

    </>
  )
}

export default Section1