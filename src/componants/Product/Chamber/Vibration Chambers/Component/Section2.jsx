import React from "react";
import "./Style/Section2.css"
const Section2 = (props) => {
  return (
    <>
      <section className="detailed-infwrap">
        <div className="container">
          <div className="row">
            <div className="col-md-12 Section2" >
              <h2>
                {props.data.Heading}
              </h2>
            </div>
            <div className="col-md-12 Section2_list">
              <ul>
                <li>
                  {props.data.First_list1}
                </li>
                <li>
                {props.data.First_list2}
                </li>
                <li>
                  {props.data.First_list3}
                </li>
                <li>
                 {props.data.First_list4}
                </li>
                <li>
                  {props.data.First_list5}
                </li>
                <li>
                  {props.data.First_list6}
                </li>
              </ul>
            </div>
            <div className="col-md-12 ">
              <div className="space20"></div>
            </div>
            <div className="row">
              <div className="col-md-10 offset-md-1">
                <img
                  src={props.data.image1}
                  alt="Vibration shaker chamber"
                  className="img-responsive img-thumbnail"
                />
              </div>
            </div>
            <h3 className="Section2_chamber">{props.data.Heading2}</h3>
            <ul>
              <li>
                {props.data.Second_list1}
              </li>
              <li>
                {props.data.Second_list2}
              </li>
              <li>
              {props.data.Second_list3}
              </li>
              <li>
              {props.data.Second_list4}
              </li>
              <li>
              {props.data.Second_list5}
              </li>
              <li>
              {props.data.Second_list6}
              </li>
              <li>
              {props.data.Second_list7}
              </li>
              <li>
              {props.data.Second_list8}
              </li>
              <li>
              {props.data.Second_list9}
              </li>
            </ul>
          </div>
        </div>
      </section>
      
    </>
  );
};

export default Section2;
