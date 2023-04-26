import React from 'react'
import { Box } from '@mui/material';
import './Style/RepairService.css';
import image1 from '../Images/calibration_img.jpg'
import image2 from '../Images/maintenance_image.jpg'
import image3 from '../Images/refrigenation_image.jpg'
import image4 from '../Images/servicing_image.jpg'
import image5 from '../Images/softwareUpdate_image1.png'
import image6 from '../Images/spareParts_image2.jpg'
import image7 from '../Images/refurbished_image.jpg'
import image8 from '../Images/training_image.jpg'
const RepairService = (props) => {
  return (
    <div>
       <Box className='rs-container-fluid-container01'>
          <div className='container-fluid rs-headhing01'>
            {props.data.Links[0].msg9}
          </div>
          <Box className='flex-container rs_image_container01'>
          <div className='rs_image1'><img src={image1} alt='my_image' className='image_01-fluid rs-images01'/><h6 className='rs-sub-heading_01'>{props.data.Links[0].msg1}</h6></div>
         <div className='rs_image2'><img src={image2} alt='my_image' className='image_01-fluid rs-images01'/><h6 className='rs-sub-heading_02'>{props.data.Links[0].msg2}</h6></div>
         <div className='rs_image3'><img src={image3} alt='my_image' className='image_01-fluid rs-images01'/><h6 className='rs-sub-heading_03'>{props.data.Links[0].msg3}</h6></div>
         <div className='rs_image4'><img src={image4} alt='my_image' className='image_01-fluid rs-images01'/><h6 className='rs-sub-heading_04'>{props.data.Links[0].msg4}</h6></div>
          </Box>

          <Box className='flex-container rs_image_container02'>
          <div className='rs_image1'><img src={image5} alt='my_image' className='image_01-fluid rs-images01'/><h6 className='rs-sub-heading_05'>{props.data.Links[0].msg5}</h6></div>
         <div className='rs_image2'><img src={image6} alt='my_image' className='image_01-fluid rs-images01' /><h6 className='rs-sub-heading_06'>{props.data.Links[0].msg6}</h6></div>
         <div className='rs_image3'><img src={image7} alt='my_image' className='image_01-fluid rs-images01'/><h6 className='rs-sub-heading_07'>{props.data.Links[0].msg7}</h6></div>
         <div className='rs_image4'><img src={image8} alt='my_image' className='image_01-fluid rs-images01'/><h6 className='rs-sub-heading_08'>{props.data.Links[0].msg8}</h6></div>
          </Box>
         
       </Box> 
    </div>
  )
}

export default RepairService