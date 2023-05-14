import React from "react";
import "./Style/MissionValue.css";
import logo1 from "../Images/OurMission_logo.png";
import logo2 from "../Images/OurValues_image.png";
const MissionValue = (props) => {
  let tabledata;
  if (props.data.OurVision) {
    tabledata = props.data.OurVision.map((datas, index) => {
      return (
        <p>
          {index + 1}. {datas.msg}
        </p>
      );
    });
  }
  let tabledata2;
  if (props.data.OurMission) {
    tabledata2 = props.data.OurMission.map((datas2, index2) => {
      return (
        <p>
          {index2 + 1}. {datas2.msg}
        </p>
      );
    });
  }
  let tabledata3;
  if (props.data.OurValues) {
    tabledata3 = props.data.OurValues.map((datas3, index3) => {
      return (
        <p>
          {index3 + 1}. {datas3.msg}
        </p>
      );
    });
  }
  return (
    <div className="gallary">
      <div className="container">
        
        <ul className="image-gallery">
          <li>
            <img src={props.data.Image1} alt={props.data.Image1} />
            <div className="overlay">
              <div className="row gallary-1-1">
                <div className="col-10 gallary-4">{tabledata}</div>
              </div>
            </div>
          </li>
          <li>
            <img src={props.data.Image2} alt={props.data.Image2} />
            <div className="overlay">
              <div className="row gallary-1-1">
                <div className="col-10 gallary-4">{tabledata2}</div>
              </div>
            </div>
          </li>
          <li>
            <img src={props.data.Image3} alt={props.data.Image3} />
            <div className="overlay">
              <div className="row gallary-1-1">
                <div className="col-10 gallary-4">{tabledata3}</div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MissionValue;
