import React from "react";
import "./Style/Section3.css";
const Section3 = (props) => {
  const table_data = props.data.desc.map((row, index) => {
    return (
      <p>
        {index + 1}. {row.li}
      </p>
    );
  });
  const table_data2 = props.data.desc2.map((row, index) => {
    return (
      <p>
        {index + 1}. {row.li}
      </p>
    );
  });
  return (
    <div className="Air125-Section3">
      <div className="container ">
        <div className="row Air125-Section3">
          <div className="col-10 row Air125-Section3-2">
            <div className="col-md-6 col-12 Air125-Section3-1">
              <h3>{props.data.heading}</h3>
              {table_data}
            </div>
            <div className="col-md-6 col-12 Air125-Section3-1">
              <h3>{props.data.heading2}</h3>
              {table_data2}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
