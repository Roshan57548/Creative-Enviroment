import React from 'react'
import "./Style/Section2.css"

const Section2 = () => {
  return (
    <div>
      <div className='container section2_container'>
        <div className="row">
          <div className='col-md-12 col-lg-6 section2_left'>
             <div className='container-fluid our_mision'>
              <div className='row my-2 section2_left_Heading'>Environmental Test Chambers Manufacturers & Suppliers</div>
              <div>
                <p className='row my-2 section2_left_para'>ET-Series Custom Environmental Test Chambers are designed with uncompromised features included in the system to meet your changing application needs of simulation of wide range of temperature, relative humidity etc., and conditions without the added cost of expensive add-on’s as options. Available in varied volumes to fit your differing specimen sizes.</p>
                 <ul className='section2_left_list'>
                   <li>Block construction with easy reach-in maintenance sections and user- friendly control desk.</li>
                   <li>Designed to meet variety of testing applications on diverse sizes of testing specimens.</li>
                 </ul>
              </div>
             </div>
          </div>

             <div className='col-md-12 col-lg-6 my-6 section2_right'>
             <div className='container-fluid'>
                <div className='row my-2 section2_right_Heading'>Uncompromised features included at no additional add-on costs</div>
                <div>
                 <ul className='section2_right_list'>
                   <li>LED illuminated work-space with multi-pane vaccumized glass view window and de-fog heaters.</li>
                   <li>High grade SS interiors & CRCS powder coated panels with durable SS shelving and height adjustable tray channels.</li>
                   <li>High grade SS interiors & CRCS powder coated panels with durable SS shelving and height adjustable tray channels.</li>
                   <li>High grade SS interiors & CRCS powder coated panels with durable SS shelving and height adjustable tray channels.</li>
                 </ul>
              </div>
             </div>
             </div>
        </div>
      </div>
    </div>
  )
}

export default Section2