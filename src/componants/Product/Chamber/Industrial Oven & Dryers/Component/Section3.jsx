import React from 'react'
import './Style/Section3.css'

const Section3 = (props) => {
  return (
    <div className='iod_s3_container'>
        <div className="iod_s3_wrapper">
            <div className="iod_s3_left">
                <div className="iod_s3_lft_upper">
                    <div className="iod_s3_col1">
                        <h4 className='iod_s3_heading'>{props.data.card1.heading}</h4>
                        <p>{props.data.card1.desc}</p>
                    </div>
                    <div className="iod_s3_col1">
                        <h4 className='iod_s3_heading'>{props.data.card2.heading}</h4>
                        <p>{props.data.card2.desc}</p>
                    </div>
                </div>
                <div className="iod_s3_lft_down">
                    <h4 className='iod_s3_heading'>{props.data.card3.heading}</h4>
                    <p>{props.data.card3.desc}</p>
                </div>
            </div>
            <div className="iod_s3_right">
             <h4 >{props.data.table.heading}</h4>
             <table className='iod_s3_tbl'>
                <tr>
                    <td className='iod_s3_data'>{props.data.table.first.ldesc}</td>
                    <td className='iod_s3_data'>{props.data.table.first.rdesc}</td>
                </tr>
                <tr>
                    <td className='iod_s3_data'>
                    <ul>
                        <li>EO150 - 250T</li>
                        <li>EO300 - 250T</li>
                        <li>EO600 - 250T</li>
                        <li>EO950 - 250T</li>
                        <li>EO1400 - 250T</li>
                    </ul>
                    </td>
                    <td className='iod_s3_data'>
                    <ul>
                        <li>550 X 400 X 700 MM</li>
                        <li>650 X 600 X 800 MM</li>
                        <li>800 X 850 X 900 MM</li>
                        <li>1000 X 100 X 950 MM</li>
                        <li>1100 X 1350 X 950 MM</li>
                    </ul>
                    </td >
                </tr>
                <tr>
                    <td className='iod_s3_data'>Volume (in liters)</td>
                    <td className='iod_s3_data'>150, 300, 600, 950 & 1400</td>
                </tr>
                <tr>
                    <td className='iod_s3_data'>Temperature</td>
                    <td className='iod_s3_data'>250 °C</td>
                </tr>
             </table>
            </div>
        </div>
    </div>
  )
}

export default Section3