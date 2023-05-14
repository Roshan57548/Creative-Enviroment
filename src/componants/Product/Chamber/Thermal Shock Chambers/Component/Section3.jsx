import React from 'react'
import './Style/Section3.css'
import Image_1 from './Image/image_3.jpg'
import Image_2 from './Image/image_4.png'
const Section3 = () => {
  return (
    <>
    <section>
        <div className='container'>
            <div className='row'>
                <div className='col-md-10'>
                    <img src={Image_1} alt='' className='img-responsive'></img>
                    <div className='space20'></div>
                </div>
                <div className='col-md-2'>
                    <img src={Image_2} alt='' className='img-responsive'></img>
                    
                </div>
                
            </div>
        </div>
    </section>
    </>
  )
}

export default Section3