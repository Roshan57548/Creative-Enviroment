import React from 'react'
import "./Style/Section1.css"

const Section1 = (props) => {
  return (
    <>
    <div className="section1_container razor-Blade">
    <div className="section1_bgcolor">
        <div className="section1_wrapper">
            <div className="section1_image">
                <img className='section1_img' src="https://www.envisystech.com/themes/envisystech/assets/img/new-imgs19/inner-prods/razor-blade/razor-blade-showcase-img.png" alt="" />
            </div>
            <div className="section1_textarea">
                <h5>ESC-SERIES</h5>
                <h2 className='section1_main_heading'>Sub-Zero Testing Chamber for Razor Blades & Automotive components</h2>
                <h5 className='section1_sub_heading'>Freezing the Razor Blades... Automotive Components..</h5>
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