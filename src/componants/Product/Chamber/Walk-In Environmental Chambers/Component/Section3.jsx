import React from 'react'
import './Style/Section3.css'
import Image_1 from './Image/image_2.png'
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
                                <li>EWS10K -35T /65T 35H/65H</li>
                                <li>EWS12K -35T/65T 35H/65H</li>
                                <li>EWS14K -35T/65T 35H/65H</li>
                                <li>EWS16K -35T/65T 35H/65H</li>
                                <li>EWS18K -35T/65T 35H/65H</li>
                                <li>EWS22K -35T/65T 35H/65H</li>
                            </ul>
                        </td>
                        <td className='wec_s3_list'>
                            <ul>
                                <li>2200 X 2200 X 2000 MM - Work Space</li>
                                <li>2200 X 2200 X 2400 MM - Work Space</li>
                                <li>2200 X 3100 X 2000 MM - Work Space</li>
                                <li>2200 X 3100 X 2400 MM - Work Space</li>
                                <li>2200 X 4100 X 2400 MM - Work Space</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td className='wec_s3_list'>Volume</td>
                        <td className='wec_s3_list'>10000, 12000, 14000, 16000, 18000 & 22000 Liters</td>
                    </tr>
                    <tr>
                        <td className='wec_s3_list'>Temp Relative Humidity</td>
                        <td className='wec_s3_list'>-35 / -65 to 180°C 10 to 95% RH</td>
                    </tr>
                </table>
            </div>
            <div className="wec_s3_img">
                <img src={Image_1} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Section3