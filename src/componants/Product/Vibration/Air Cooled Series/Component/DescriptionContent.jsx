import React from "react";
import './Style/Description.css'
const DescriptionContent = (props) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h3 className="heading-text-0">{props.data.Heading[0].head1}</h3>
            <p className="para-content-ac">
              {props.data.Paragraph[0].para1}
            </p>
            <p className="para-content-ac">
            {props.data.Paragraph[0].para2}
            </p>
            <p className="para-content-ac">
            {props.data.Paragraph[0].para3}
            </p>
          </div>
          <div className="col-md-12">
            <h3 className="heading-text">{props.data.Heading[0].head2} </h3>
            <p className="para-content-ac">
            {props.data.Paragraph[0].para4}
            </p>
          </div>
          <div className="col-md-12">
            <h3 className="heading-text">{props.data.Heading[0].head3} </h3>
            <p className="para-content-ac">
            {props.data.Paragraph[0].para5}
            </p>
          </div>
          <div className="col-md-12">
            <h3 className="heading-text">{props.data.Heading[0].head4}</h3>
            <p className="para-content-ac">
            {props.data.Paragraph[0].para6}
            </p>
          </div>
          <div className="col-md-12">
            <h3 className="heading-text">{props.data.Heading[0].head5}</h3>
            <p className="para-content-ac">
            {props.data.Paragraph[0].para7}
            </p>
          </div>
          <div className="col-md-12">
            <h3 className="heading-text">{props.data.Heading[0].head6}</h3>
            <p className="para-content-ac">
            {props.data.Paragraph[0].para8}
            </p>
          </div>
          <div className="col-md-12">
            <h3 className="heading-text">{props.data.Heading[0].head7}</h3>
            <p className="para-content-ac">{props.data.Paragraph[0].para9}</p>
          </div>
          <div className="col-md-12">
            <h3 className="heading-text">{props.data.Heading[0].head8} </h3>
            <p className="para-content-ac">{props.data.Paragraph[0].para10}</p>
          </div>
          <div className="col-md-12">
            <h3 className="heading-text">{props.data.Heading[0].head9}</h3>
            <li>{props.data.Listitem[0].li1}</li>
            <li>{props.data.Listitem[0].li2}</li>
            <li>{props.data.Listitem[0].li3}</li>
            <li>{props.data.Listitem[0].li4}</li>
            <li>{props.data.Listitem[0].li5}</li>
            <li>{props.data.Listitem[0].li6}</li>
            <li>{props.data.Listitem[0].li7}</li>
            <li>{props.data.Listitem[0].li8}</li>
            <li>{props.data.Listitem[0].li9}</li>
            <li>{props.data.Listitem[0].li10}</li>
          </div>
        </div>
      </div>
    </>
  );
};

export default DescriptionContent;
