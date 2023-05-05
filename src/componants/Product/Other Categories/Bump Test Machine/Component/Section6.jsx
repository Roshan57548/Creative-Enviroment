import React from 'react'
import './Style/Section6.css'
const Section6 = (props) => {
  return (
    <div className='Bump-Section6'>
        <div className='container Bump-Section6-1'>
            <div className='row Bump-Section6-2'>
                <div className='col-lg-10 col-12 Bump-Section6-h3'>
                    <h3>{props.data.Section_6.Product_Heading}</h3>
                </div>
                <div className='col-lg-10 col-12 Bump-Section6-p'>
                    <p>{props.data.Section_6.Product_Sub_Para}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Section6