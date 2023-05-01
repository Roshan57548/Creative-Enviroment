import React from 'react'
import './Style/Section5.css'

const Section5 = () => {
  return (
    <div className='s5_container'>
        <div className="s5_wrapper">
            <div className="s5_left">
                <h2 className='s5_heading'>PERFORMANCE</h2>
                <h5>STANDARDS OF COMPLIANCE AND SCOPE</h5>
                <div className="s5_list">
                <ul>
                    <li>IEC-60529</li>
                    <li>IEC-68-2-68</li>
                    <li>DIN 40050 Part 9</li>
                    <li>DIN/VDE 470</li>
                    <li>DIN EN 60068-2-68</li>                       
                    </ul>
                    <ul>
                    <li>SAE J575</li>
                    <li>MIL</li>
                    <li>JSS 55555</li>
                    <li>JIS etc.,</li>
                </ul>
                </div>
                <p>Note: Single system doesn't comply with all standards. The test systems are manufactured as per user specified or required standards.</p>
            </div>
            <div className="s5_right">
            <table  className='table table-responsive table-bordered' >
                        <th>Standard Models</th>
                        <tr className='s5_table' >
                            <td className='s5_tbl'>Modules</td>
                            <td className='s5_tbl'>EDC - 1000</td>
                            <td className='s5_tbl'>EDC - 1500</td>
                            <td className='s5_tbl'>EDC-3375</td>
                        </tr>
                        <tr>
                            <td className='s5_tbl'>Working Volume</td>
                            <td className='s5_tbl'>1000 Liters</td>
                            <td className='s5_tbl'>1500 Liters</td>
                            <td className='s5_tbl'>3375 Liters</td>

                        </tr>
                        <tr>
                            <td className='s5_tbl'>Working Dimensions</td>
                            <td className='s5_tbl'>1000x1000x1000mm</td>
                            <td className='s5_tbl'>1500x1000x1000mm</td>
                            <td className='s5_tbl'>1500x1500x1500mm</td>
                        </tr>
                    </table>
            </div>
        </div>

    </div>
  )
}

export default Section5