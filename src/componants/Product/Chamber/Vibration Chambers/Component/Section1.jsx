import React from 'react'
import "./Style/Section1.css"
import { useNavigate } from "react-router-dom";

const Section1 = (props) => {
  const navigate = useNavigate();
  const HandleClick = () => {
    navigate('/Contact-Us');
  }
  return (
    <>
    <div className="section1_container">
      <div className="bgcolor">
        <div className="section1_wrapper">
            <div className="section1_image">
                <img className='section1_img' src={props.data.image} alt="" />
            </div>
            <div className="section1_textarea">
                <h5>{props.data.Heading1}</h5>
                <h2 className='section1_main_heading'>{props.data.Heading2}</h2>
                <h5 className='section1_sub_heading'>{props.data.Heading3}</h5>
                <h5 className='section1_sub_heading'>{props.data.Heading4}</h5>
                <h6 className='section1_link'>{props.data.Heading5}</h6>
                <button onClick={HandleClick} className='section1_btn'>{props.data.Heading6}</button>
            </div>
        </div>
      </div>
    </div>

    </>
  )
}

export default Section1