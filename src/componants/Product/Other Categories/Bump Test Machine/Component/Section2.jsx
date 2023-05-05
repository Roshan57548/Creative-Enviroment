import React from 'react'
import './Style/Section2.css'
const Section2 = (props) => {
  return (
    <div className='Bump-Section2'>
        <div className='container Bump-Section2-1'>
            <div className='row Bump-Section2-2'>
                <div className='col-lg-10 col-12 Bump-Section2-h2'>
                    <h2>{props.data.Section_2.Heading}</h2>
                </div>
                <div className='col-lg-10 col-12 Bump-Section2-h3'>
                    <h3>{props.data.Section_2.Product_Heading}</h3>
                </div>
                <div className='col-lg-10 col-12 Bump-Section2-p'>
                    <p>{props.data.Section_2.Product_Sub_Para}</p>
                </div>
                <div className='col-lg-10 col-12 Bump-Section2-p'>
                    <p>{props.data.Section_2.Product_Sub_Para2}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Section2