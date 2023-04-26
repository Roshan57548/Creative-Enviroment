import React from 'react'
import './Style/MissionValue.css';
import logo1 from '../Images/OurMission_logo.png'
import logo2 from '../Images/OurValues_image.png'
const MissionValue = (props) => {
  return (
    <div>
      <div className='container Body1'>
        <div className="row">
          <div className='col-md-12 col-lg-6 mission_container'>
             <div className='container-fluid our_mision'>
              <img src={logo1} alt='my_image' className='our_mission_image' />
              <div className='row my-2 ourmissionHeading'>{props.data.Heading1}</div>
              <div>
                 <ul className='ourmission_list'>
                   <li>{props.data.OurMission[0].msg1}</li>
                   <li>{props.data.OurMission[0].msg2}</li>
                   <li>{props.data.OurMission[0].msg3}</li>
                   <li>{props.data.OurMission[0].msg4}</li>
                 </ul>
              </div>
             </div>
          </div>

             <div className='col-md-12 col-lg-6 my-6 mission_container1'>
             <div className='container-fluid'>
                <img src={logo2} alt='my_image' className='our_values_image' />
                <div className='row my-2 ourvaluesHeading'>{props.data.Heading2}</div>
                <div>
                 <ul className='ourvalues_list'>
                   <li>{props.data.OurValues[0].msg1}</li>
                   <li>{props.data.OurValues[0].msg2}</li>
                   <li>{props.data.OurValues[0].msg3}</li>
                   <li>{props.data.OurValues[0].msg4}</li>
                 </ul>
              </div>
             </div>
             </div>
        </div>
      </div>
    </div>
  )
}

export default MissionValue