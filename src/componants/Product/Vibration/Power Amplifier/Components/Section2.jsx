import React from 'react'
import './Style/Section2.css'
const Section2 = (props) => {
  return (
    <div className='Bump-Section2'>
        <div className='container Bump-Section2-1'>
            <div className='row Bump-Section2-2'>
                <div className='col-10 Bump-Section2-h2'>
                    <h2>Product Description</h2>
                </div>
                <div className='col-10 Bump-Section2-h3'>
                    <h3>{props.data.section1.heading}</h3>
                </div>
                <div className='col-10 Bump-Section2-p'>
                    <p>{props.data.section1.desc}</p>
                </div>
                <div className='col-10 Bump-Section2-p'>
                    <p>{props.data.section1.desc2}</p>
                </div>
                <div className='col-10 Bump-Section2-p'>
                    <p>{props.data.section1.desc3}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Section2