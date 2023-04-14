import React from "react";
import "./Style/CompanyDetail.css";
import image1 from '../Images/companyDetails_certi1.png'
import image2 from '../Images/companyDetails_certi2.png'
import image3 from '../Images/companyDetails_certi3.png'
import image4 from '../Images/companyDetails_certi4.png'
const CompanyDetails = (props) => {
  return (
<div className="CompanyDetail_Div">
    <div className="container-fluid heading00">
    <div className="container-fluid heading01">{props.data.Links[0].msg6}</div>
    <div className="container-fluid heading02">{props.data.Links[0].msg7}</div>
    <div className="container-fluid my-4 content01">{props.data.Links[0].msg1}</div>
     <div className="container-fluid my-4 content02">{props.data.Links[0].msg2}</div>
     <div className="container-fluid-my-4 company_details_images">
        <div className="row">
           <div className="col-md-12 col-lg-6">
           <div className="container-fluid my-4 heading03">{props.data.Links[0].msg3}</div>
           <div className="container-fluid my-4 heading04">{props.data.Links[0].msg4}</div>
           <div className="container-fluid my-4 heading05">{props.data.Links[0].msg5}</div>
           </div>
           
      
           <div className="col-md-12 col-lg-6">
             <div className="container-fluid">
               <h2 className="certificates">Certificates</h2>
               <div className="row">
                 <div className="col-md-6 col-lg-6">
                   <img src={image1} alt="my_img" className="CompanyDetails_image1"/>
                 </div>
                 <div className="col sm-1 col-md-6 col-lg-6"> <img src={image2} alt="my_img" className="CompanyDetails_image2"/></div>
               </div>

               <div className="row">
                <div className="col sm-1 col-md-6 col-lg-6"> <img src={image3} alt="my_img" className="CompanyDetails_image3"/></div>
                <div className="col sm-1 col-md-6 col-lg-6"> <img src={image4} alt="my_img" className="CompanyDetails_image4"/></div>
               </div>
             </div>
           </div>
        </div>
     </div>
     </div>
     </div>
  );
};

export default CompanyDetails;
