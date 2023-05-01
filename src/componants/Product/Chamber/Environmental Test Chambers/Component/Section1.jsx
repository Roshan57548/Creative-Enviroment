import React from 'react'
import "./Style/Section1.css"

const Section1 = (props) => {
  return (
    <>
    <div className="section1_container">
      <div className="section1_bgcolor">
        <div className="section1_wrapper">
            <div className="section1_image">
                <img className='section1_img' src={props.data.src} alt="" />
            </div>
            <div className="section1_textarea">
                <h5>{props.data.type}</h5>
                <h2 className='section1_main_heading'>{props.data.heading}</h2>
                <h5 className='section1_sub_heading'>{props.data.shead}</h5>
                <h6 className='section1_link'>{props.data.sub}</h6>
                <button className='section1_btn'>{props.data.link}</button>
            </div>
      </div>
        </div>
    </div>

    </>
  )
}

export default Section1