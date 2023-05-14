import React from 'react'
import './Style/Section3.css'
const Section10 = (props) => {
  return (
    <div className='Bump-Section21'>
        <div className='container Bump-Section21-1'>
            <div className='row Bump-Section21-2'>
                <div className='col-10 Bump-Section21-h3'>
                    <h3>{props.data.heading}</h3>
                </div>
                <div className='col-10 Bump-Section21-h3'>
                    <h3>{props.data.heading2}</h3>
                </div>
                <div className='col-10 Bump-Section21-p'>
                    <p>{props.data.desc}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Section10