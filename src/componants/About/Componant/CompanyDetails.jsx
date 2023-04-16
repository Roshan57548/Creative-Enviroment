import React from "react";
import "./Style/CompanyDetail.css";

import image1 from "../Images/companyDetails_certi1.png";
import image2 from "../Images/companyDetails_certi2.png";
import image3 from "../Images/companyDetails_certi3.png";
import image4 from "../Images/companyDetails_certi4.png";

const CompanyDetails = (props) => {
  return (
    <div className="main-container">
      <div className="container-fluid">
        <div className="container-header">
          <div>
            <h2>{props.data.Heading}</h2>
            <hr />
            <div>
              <h4>{props.data.SubHeading}</h4>
            </div>
          </div>
          <div>{props.data.Description[0].message1}</div>
          <div>{props.data.Description[0].message2}</div>
          <div>{props.data.Description[0].message3}</div>
          <div>{props.data.Description[0].message4}</div>
          <div>{props.data.Description[0].message5}</div>
        </div>
        <div className="container-subheader">
          <div>
            <h2>{props.data.SubHeading1}</h2>
            <hr />
          </div>

          <div className="certificate-container row">
            <div className="col-sm-6 col-md-6 col-lg-3">
              <img src={image1} alt="Image 1" className="img-fluid" />
            </div>
            <div className="col-sm-6 col-md-6 col-lg-3  d-flex justify-content-center">
              <img src={image2} alt="Image 2" className="img-fluid" />
            </div>
            <div className="col-sm-6 col-md-6 col-lg-3  d-flex justify-content-center">
              <img src={image3} alt="Image 3" className="img-fluid" />
            </div>
            <div className="col-sm-6 col-md-6 col-lg-3  d-flex justify-content-center">
              <img src={image4} alt="Image 4" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetails;
