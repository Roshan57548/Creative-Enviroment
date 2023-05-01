import React from 'react'
import './Style/Section3.css'

const Section3 = () => {
  return (
    <div className='wec_s3_container'>
        <div className="wec_s3_wrapper">
            <div className="wec_s3_table">
            <table>
                    <th>STANDARD MODELS</th>
                    <tr>
                        <td className='wec_s3_list'>Parameters</td>
                        <td className='wec_s3_list'>Specifications</td>
                    </tr>
                    <tr>
                        <td className='wec_s3_list'>
                            <ul>
                                <li>EWS10K -35T/65T 35H/65H</li>
                                <li>EWS12K -35T/65T 35H/65H</li>
                                <li>EWS14K -35T/65T 35H/65H</li>
                                <li>EWS16K -35T/65T 35H/65H</li>
                                <li>EWS18K -35T/65T 35H/65H</li>
                                <li>EWS22K -35T/65T 35H/65H</li>
                            </ul>
                        </td>
                        <td className='wec_s3_list'>
                            <ul>
                                <li>2200X2200X2000 MM - Work Space</li>
                                <li>2200X2200X2400 MM - Work Space</li>
                                <li>2200X3100X2000 MM - Work Space</li>
                                <li>2200X3100X2400 MM - Work Space</li>
                                <li>2200X4100X2400 MM - Work Space</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td className='wec_s3_list'>Volume</td>
                        <td className='wec_s3_list'>10000,12000,14000, 16000, 18000 & 22000 Liters</td>
                    </tr>
                    <tr>
                        <td className='wec_s3_list'>Temp Relative Humidity</td>
                        <td className='wec_s3_list'>-35 / -65 to 180°C 10 to 95% RH</td>
                    </tr>
                </table>
            </div>
            <div className="wec_s3_img">
                <img src="https://www.envisystech.com/storage/app/media/inner-products/new-products/latest/walkin-chambers/walkin-chamber-latest-model-showcase2.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Section3