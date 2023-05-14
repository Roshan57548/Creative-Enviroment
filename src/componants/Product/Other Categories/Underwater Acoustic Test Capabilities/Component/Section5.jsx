
import React from 'react'
import "./Style/Section5.css"

const Section5 = (props) => {
  return (
    <>
    
    <div className="s5_bgcolor-1">
      <div className="container ">
        <div className="row s5_bgcolor-1">
            
            <div className="col-lg-4 col-md-6 col-12 s5_image">
                <img className='s5_img' src={props.data.src} alt="" />
            </div>
            <div className="col-lg-8 col-md-12 col-12 s5_textarea">
                <h2 className='s5_main_heading'>{props.data.type}</h2>
                <h5 className='s5_sub_heading'>{props.data.heading}</h5>
                <h6 className='s5_link'>{props.data.shead}</h6>
                <h6 className='s5_link'>{props.data.sub}</h6>
                <h6 className='s5_link'>{props.data.link}</h6>
            </div>
        </div>
        </div>
    </div>

    </>
  )
}

export default Section5