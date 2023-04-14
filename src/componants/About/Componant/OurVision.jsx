import React from 'react'
import './Style/OurVision.css';
import Logo from '../Images/ourVision_image.png'
const OurVision = (props) => {

  // const logo_url="https://cdn.pixabay.com/photo/2017/03/19/20/19/ball-2157465__340.png";
  return (
    <div>
    <div className='container-fluid heading1'>
      <img src={Logo} alt="My Image" className='logo'/>
      
      <div className='OurVision_heading'>OUR VISION</div>
        <ul className='OurVision_list'>
          <li className='points'>
            {props.data.Links[0].msg1}
          </li>
          <li>
          {props.data.Links[0].msg2}
          </li>
          <li>
          {props.data.Links[0].msg3}
          </li>
        </ul>
      </div>
      </div>
  )
}

export default OurVision