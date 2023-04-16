import React from 'react'
import './Style/TestChamber.css';
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
          {props.data.cards[0].card_image}
          </div>
          <div className="tc_links_heading"><h5 className='tc_lk_heading'>{props.data.cards[0].card_heading}</h5></div>
          <div className="tc_links_desp"><p className='tc_lc_desc'>{props.data.cards[0].card_desp}</p></div>
        </div>
        <div className="tc_links">
          <div className="tc_links_img">
          {props.data.cards[1].card_image}          </div>
          <div className="tc_links_heading"><h5 className='tc_lk_heading'>{props.data.cards[1].card_heading}</h5></div>
          <div className="tc_links_desp"><p className='tc_lc_desc'>{props.data.cards[1].card_desp}</p></div>
        </div>
        <div className="tc_links">
          <div className="tc_links_img">
          {props.data.cards[2].card_image}   
         </div>
          <div className="tc_links_heading"><h5 className='tc_lk_heading'>{props.data.cards[2].card_heading}</h5></div>
          <div className="tc_links_desp"><p className='tc_lc_desc'>{props.data.cards[2].card_desp}</p></div>
        </div>
        </div>
        
      </div>
    </div>

    </div>
  )
}

export default TestChamber