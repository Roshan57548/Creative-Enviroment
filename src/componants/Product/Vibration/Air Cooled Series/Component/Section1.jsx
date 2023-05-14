import React from 'react'
// import "./Style/Section1.css"
import { useNavigate } from "react-router-dom";
const Section1 = (props) => {
  const navigate = useNavigate();
  const HandleClick = () => {
    navigate('/Contact-Us');
  }
  return (
    <>
    
    <div className="section1_container ">
      <div className="section1_bgcolor">
        <div className="section1_wrapper">
            
            <div className="section1_image">
                <img className='section1_img' src={props.data.Image.img} alt="" />
            </div>
            <div className="section1_textarea">
                <h5>{props.data.Heading[0].head1}</h5>
                <h2 className='section1_main_heading'>{props.data.Heading[0].head2}</h2>
                <h5 className='section1_sub_heading'>{props.data.Heading[0].head3}</h5>
                <h6 className='section1_link'>{props.data.Heading[0].head4}</h6>
                <button onClick={HandleClick}  className='section1_btn'>{props.data.Button}</button>
            </div>
        </div>
        </div>
    </div>

    </>
  )
}

export default Section1