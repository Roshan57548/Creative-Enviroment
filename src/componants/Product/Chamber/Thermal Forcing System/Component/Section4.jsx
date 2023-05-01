import React from 'react'
import './Style/Section4.css'

const Section4 = () => {
  return (
    <div className='tfs_s4_container'>
        <div className="tfs_s4_wrapper">
            <h4 className='tfs_s4_heading'>General Specification - Range – Scope - Standards</h4>
            <div className="tfs_s4_scn">
            <div className="tfs_s4_left">
                <table>
                    <th>System General</th>
                    <tr >
                        <td className='tfs_s4_list'>Maximum Temperature</td>
                        <td className='tfs_s4_list'>+40ºC</td>
                    </tr>
                    <tr>
                        <td className='tfs_s4_list'>Minimum Temperature</td>
                        <td className='tfs_s4_list'>-40ºC</td>
                    </tr>
                    <tr>
                        <td className='tfs_s4_list'>Temperature Accuracy</td>
                        <td className='tfs_s4_list'>2.0º C</td>
                    </tr>
                    <tr>
                        <td className='tfs_s4_list'>Typical Transition Rates</td>
                        <td className='tfs_s4_list'>25ºC to 0ºC in, 2-3 minutes</td>
                    </tr>
                    <tr>
                        <td className='tfs_s4_list'>Temperature Sensor</td>
                        <td className='tfs_s4_list'>T-type Thermocouple</td>
                    </tr>
                    <tr>
                        <td className='tfs_s4_list'>DB Rating</td>
                        <td className='tfs_s4_list'>63-65 d BA</td>
                    </tr>
                </table>
            </div>
            <div className="tfs_s4_right">
            <table>
                    <th>System Requirements</th>
                    <tr>
                        <td className='tfs_s4_list'>Maximum Temperature</td>
                        <td className='tfs_s4_list'>+40ºC</td>
                    </tr>
                    <tr>
                        <td className='tfs_s4_list'>Minimum Temperature</td>
                        <td className='tfs_s4_list'>-40ºC</td>
                    </tr>
                    <tr>
                        <td className='tfs_s4_list'>Temperature Accuracy</td>
                        <td className='tfs_s4_list'>2.0º C</td>
                    </tr>
                    <tr>
                        <td className='tfs_s4_list'>Typical Transition Rates</td>
                        <td className='tfs_s4_list'>25ºC to 0ºC in, 2-3 minutes</td>
                    </tr>
                    <tr>
                        <td className='tfs_s4_list'>Temperature Sensor</td>
                        <td className='tfs_s4_list'>T-type Thermocouple</td>
                    </tr>
                    <tr>
                        <td className='tfs_s4_list'>DB Rating</td>
                        <td className='tfs_s4_list'>63-65 d BA</td>
                    </tr>
                </table>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Section4