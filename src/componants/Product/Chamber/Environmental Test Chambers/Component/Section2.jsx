import React from 'react'
import "./Style/Section2.css"

const Section2 = (props) => {
  return (
    <div>
      <div className='container section2_container'>
        <div className="row">
          <div className='col-md-12 col-lg-6 section2_left'>
             <div className='container-fluid our_mision'>
              <div className='row my-2 section2_left_Heading'>{props.data.lport.heading}</div>
              <div>
                <p className='row my-2 section2_left_para'>{props.data.lport.desc}</p>
                 <ul className='section2_left_list'>
                   <li>{props.data.lport.li1}</li>
                   <li>{props.data.lport.li2}</li>
                 </ul>
              </div>
             </div>
          </div>

             <div className='col-md-12 col-lg-6 my-6 section2_right'>
             <div className='container-fluid'>
                <div className='row my-2 section2_right_Heading'>{props.data.rport.heading}</div>
                <div>
                 <ul className='section2_right_list'>
                   <li>{props.data.rport.li1}</li>
                   <li>{props.data.rport.li2}</li>
                   <li>{props.data.rport.li3}</li>
                   <li>{props.data.rport.li4}</li>
                   <li>{props.data.rport.li5}</li>
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