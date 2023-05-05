import React from "react";
import "./Style/Section2.css";
const Section2 = (props) => {
  const data = props.data.Section_2.Products_Data.map((row, index) => {
    return (
      <p>
        {index + 1}. {row.List}
      </p>
    );
  });
  return (
    <div className="Centrifuge-Section2">
      <div className="container Centrifuge-Section2-1">
        <div className="row Centrifuge-Section2-1">
        <div className="col-12 Centrifuge-Section2-h3">
              <h3>{props.data.Section_2.Heading}</h3>
            </div>
          <div className="col-lg-10 col-md-12 row">
            
            <div className="col-md-8 col-12 Centrifuge-Section2-h4">
              <h4>{props.data.Section_2.Product_Heading}</h4>
              <div>{data}</div>
            </div>
            <div className="col-md-4 col-12 Centrifuge-Section2-Image">
              <img src={props.data.Section_2.Product_Image} className="Centrifuge-Section2-Img"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
