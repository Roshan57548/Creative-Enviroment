import React from 'react'
import './Style/Section2.css'
import Image_1 from './Image/image_2.png';
const Section2 = () => {
  return (
    <>
    <div className="section2_container">
        <div className="section2_wrapper">
            <div className="section2_textarea">
                <h1 className='section2_heading'>Sand and Dust Test Chambers Manufacturers & Suppliers USA, UK, Russia</h1>
                <p>Dust chamber products are used in a range of sectors to determine whether a component can perform in a dusty environment. Envisys is one of India's leading manufacturers and suppliers of dust test chambers. We manufacture standard and custom dust and sand test chamber products to meet the specified requirements of dust as well as sand tests in different industrial applications in accordance with various worldwide standards. <br />
                We consistently maintain our numero uno leadership position as dust chamber manufacturers and suppliers of high-quality sand and dust test chamber products and associated facilities because of our philosophy of constant collaboration with our team of highly skilled design and engineering experts. <br />Our dust test chamber products can reproduce, within the test chamber, the electrical and mechanical effects caused by the intrusion of sandy or dust material on equipment to assess its suitability to operate and be stored in certain environments. Moreover, our sand and dust chamber products are designed keeping in mind safety, reliability, ease of operating, and ergonomics.</p>
            </div>
            <div >
                <img className="section2_img" src={Image_1} alt="" />
            </div>
        </div>
    </div>
    </>
  )
}

export default Section2