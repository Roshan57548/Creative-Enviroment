import React from 'react'
import './Style/TestChamber.css';
import tc_image from '../../../assets/tc_image.png'
const TestChamber = (props) => {
  return (
    <div className='tc_container'>
    <div className="tc_wrapper">
      <div className="tc_left">
        {props.data.Image}
      </div>
      <div className="tc_right">
        <div className="tc_textarea">
          <h3 className='tc_text'>{props.data.heading}</h3>
          <h1 className='tc_sub_heading'>{props.data.sub_heading}</h1>
          <p className='tc_para'>{props.data.para}</p>
        </div>
        <div className="tc_links_container">

        <div className="tc_links">
          <div className="tc_links_img">
          <img  className='tc_lc_img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3xxJsilB0gI-wGa3C6buUxRQ2VKXPK2fy4w&usqp=CAU" alt="" />
          </div>
          <div className="tc_links_heading"><h3 className='tc_lk_heading'>Award for manufacturing excellence</h3></div>
          <div className="tc_links_desp"><p className='tc_lc_desc'>award winner for excellence in manufacturing products</p></div>
        </div>
        <div className="tc_links">
          <div className="tc_links_img">
          <img  className='tc_lc_img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3xxJsilB0gI-wGa3C6buUxRQ2VKXPK2fy4w&usqp=CAU" alt="" />
          </div>
          <div className="tc_links_heading"><h3 className='tc_lk_heading'>Award for manufacturing excellence</h3></div>
          <div className="tc_links_desp"><p className='tc_lc_desc'>award winner for excellence in manufacturing products</p></div>
        </div>
        <div className="tc_links">
          <div className="tc_links_img">
          <img  className='tc_lc_img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3xxJsilB0gI-wGa3C6buUxRQ2VKXPK2fy4w&usqp=CAU" alt="" />
          </div>
          <div className="tc_links_heading"><h3 className='tc_lk_heading'>Award for manufacturing excellence</h3></div>
          <div className="tc_links_desp"><p className='tc_lc_desc'>award winner for excellence in manufacturing products</p></div>
        </div>
        </div>
        
      </div>
    </div>

    </div>
  )
}

export default TestChamber