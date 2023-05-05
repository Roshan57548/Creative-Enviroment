import React from 'react'
import './Style/Section3.css'
const Section3 = (props) => {
  return (
    <div className='Bump-Section3'>
        <div className='container Bump-Section3-1'>
            <div className='row Bump-Section3-2'>
                <div className='col-lg-10 col-12 Bump-Section3-h3'>
                    <h3>{props.data.Section_3.Product_Heading}</h3>
                </div>
                <div className='col-lg-10 col-12 Bump-Section3-p'>
                    <p>{props.data.Section_3.Product_Sub_Para}</p>
                </div>
                <div className='col-lg-10 col-12 Bump-Section3-p'>
                    <p>{props.data.Section_3.Product_Sub_Para2}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Section3