import React from "react";
import './Style/Description.css';
const Description = (props) => {
  return (
    <div className="Description-1-1">
      <div className="container">
        <div className="row Description-1-2">
          <div className="col-lg-10 col-md-12">
            <h3 className="heading-text-0">{props.data.Heading[0].head1}</h3>
          </div>
          <div className="col-lg-10 col-md-12">
          <p className="para-content-ac">{props.data.Paragraph[0].p1}</p>
          <p className="para-content-ac">{props.data.Paragraph[0].p2}</p>
          <p className="para-content-ac">{props.data.Paragraph[0].p3}</p>
          <p className="para-content-ac">{props.data.Paragraph[0].p4}</p>
          <p className="para-content-ac">{props.data.Paragraph[0].p5}</p>
          <p className="para-content-ac">{props.data.Paragraph[0].p6}</p>
          <p className="para-content-ac">{props.data.Paragraph[0].p7}</p>
          <p className="para-content-ac">{props.data.Paragraph[0].p8}</p>
          <p className="para-content-ac">{props.data.Paragraph[0].p9}</p>
          <p className="para-content-ac">{props.data.Paragraph[0].p10}</p>
          <p className="para-content-ac">{props.data.Paragraph[0].p11}</p>
          <p className="para-content-ac">{props.data.Paragraph[0].p12}</p>
          <p className="para-content-ac">{props.data.Paragraph[0].p13}</p>
          <p className="para-content-ac">{props.data.Paragraph[0].p14}</p>
          <p className="para-content-ac">{props.data.Paragraph[0].p15}</p>
          <p className="para-content-ac">{props.data.Paragraph[0].p16}</p>
          <p className="para-content-ac">{props.data.Paragraph[0].p17}</p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Description;
