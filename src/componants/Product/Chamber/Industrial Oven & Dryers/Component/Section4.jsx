import React from 'react'
import './Style/Section4.css'
import Image_1 from './Image/image_3.png';
const Section4 = () => {
  return (
    <div className='iod_s4_container'>
        <div className="iod_s4_wrapper">
            <h3 className='iod_s4_heading'>Industrial Dryers:</h3>
            <div className="iod_s4_scn">
                <div className="iod_s4_left">
                    <p>If you are looking for an industrial ovens manufacturer and supplier, CENVS is the right place. We are one of the reputable industrial dryer manufacturers in India, and we offer a broad range of dryers for various industries. CENVS' high-quality specialized industrial drying oven products are built to endure extreme temperatures, have large working chambers, and provide extreme distribution and uniform air circulation for a superior temperature gradient in the work area.</p>
                </div>
                <div >
                    <img className="iod_s4_right" src={Image_1} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Section4