import React from 'react'
import "./Style/Section1.css"

const Section1 = (props) => {
  return (
    <>
    
    <div className="section1_container altitude">
      <div className="section1_bgcolor">
        <div className="section1_wrapper">
            
            <div className="section1_image">
                <img className='section1_img' src={props.data.Section_1.Image_Url} alt="" />
            </div>
            <div className="section1_textarea">
                <h5>{props.data.Section_1.Heading}</h5>
                <h2 className='section1_main_heading'>{props.data.Section_1.Product_Name}</h2>
                <h5 className='section1_sub_heading'>{props.data.Section_1.Product_Sub_Heading}</h5>
                <h6 className='section1_link'>{props.data.Section_1.Set_Up}</h6>
                <button className='section1_btn'>{props.data.Section_1.Get_Info}</button>
            </div>
        </div>
        </div>
    </div>

    </>
  )
}

export default Section1