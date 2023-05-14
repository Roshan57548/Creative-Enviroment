import React from 'react'
import './Style/Section3.css'
const Section3 = (props) => {
  return (
    <div className='Bump-Section21'>
        <div className='container Bump-Section21-1'>
            <div className='row Bump-Section21-2'>
                <div className='col-10 Bump-Section21-h3'>
                    <h3>{props.data.section2.heading}</h3>
                </div>
                <div className='col-10 Bump-Section21-p'>
                    <p>{props.data.section2.desc}</p>
                </div>
                <div className='col-10 Bump-Section21-p'>
                    <p>{props.data.section2.desc2}</p>
                </div>
                <div className='col-10 Bump-Section21-p'>
                    <p>{props.data.section2.desc3}</p>
                </div>
                <div className='col-10 Bump-Section21-p'>
                    <p>{props.data.section2.desc4}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Section3