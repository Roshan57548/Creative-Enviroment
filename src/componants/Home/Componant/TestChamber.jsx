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
          <h3>{props.data.heading}</h3>
          <h1>{props.data.sub_heading}</h1>
          <p>{props.data.para}</p>
        </div>
        <div className="tc_links">
          <div className="tc_links_img">
            {props.data.cards.cardimage}
          </div>
          <div className="tc_links_heading"><h3 className='tc_lk_heading'>{props.data.cards.card_heading}</h3></div>
          <div className="tc_links_desp"><p className='tc_lc_desc'>{props.data.cards.card_desp}</p></div>
        </div>
      </div>
    </div>

    </div>
  )
}

export default TestChamber