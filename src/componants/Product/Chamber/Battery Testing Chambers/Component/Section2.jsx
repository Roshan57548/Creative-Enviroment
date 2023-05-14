import React from 'react'
import './Style/Section2.css'
import Image_1 from './Image/image_2.jpg';
const Section2 = () => {
  return (
    <div className='btc_s2_container'>
        <div className="btc_s2_wrapper">
            <div className="btc_s2_left">
                <h2 className='btc_s2_heading'>Battery Test Chamber</h2>
                <p>Batteries are the future of energy storage, and they need to be put through their paces in testing to guarantee they can work safely and reliably. Envisys, based in Bangalore, India, is one of the topmost manufacturers and suppliers of battery test chamber products that offer temperature and climatic chambers with a variety of safety packages that are aligned with risk standards, environmental criteria, or test types for conducting lithium-ion battery testing. Envisys’ battery testing chamber products are ideal for performing tests on lithium-ion cells and modules.

Lithium-ion batteries can pose a range of risks when handled. System operators must assess the level of risk and use an appropriate safety concept to mitigate it. Portable electronic equipment has traditionally used rechargeable lithium batteries. Reliability and safety are becoming increasingly critical for electric vehicles. The batteries must work well in both hot and cold temperatures while neither leaking or exploding and providing a safety issue.</p>
            </div>
            <div className="btc_s2_right">
                <div className="btc_s2_table">
                    <h3>STANDARD MODELS</h3>
                    <table>
                        <tr>
                            <td className='btc_s2_list'>Available Range</td>
                            <td className='btc_s2_list'>600, 950 AND 1400 LITRES</td>
                        </tr>
                        <tr>
                            <td className='btc_s2_list'>Temperature</td>
                            <td className='btc_s2_list'>-40 / -70 deg C to 180 deg C</td>
                        </tr>
                        <tr>
                            <td className='btc_s2_list'>RH</td>
                            <td className='btc_s2_list'>10% to 95% (optional)</td>
                        </tr>
                    </table>
                </div>
                <div className="btc_s2_img">
                    <img  className="btc_s2_img" src={Image_1} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Section2