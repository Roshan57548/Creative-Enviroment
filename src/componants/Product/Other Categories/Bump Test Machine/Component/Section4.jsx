import React from "react";
import "./Style/Section4.css";
import Table from "react-bootstrap/Table";

const Section4 = (props) => {
  const MyTableData = props.data.Section_4.Table_Data.map((data, index) => {
    return (
      <tr>
        <td className="Bump-Section4-td1">{data.Advantages}</td>
        <td className="Bump-Section4-td">{data.Key_Features.split('\n').map(str => <p>{str}</p>)}</td>
      </tr>
    );
  });
  return (
    <div className="Bump-Section4-1">
      <div className="container Bump-Section4-2">
        <div className="row Bump-Section4-2">
          <div className="col-lg-10 col-12">
            <Table striped bordered >
              <thead>
                <tr className="Bump-Section4-tr">
                  <th className="Bump-Section4-th1">
                    {props.data.Section_4.Table_Heading}
                  </th>
                  <th className="Bump-Section4-th">
                    {props.data.Section_4.Table_Heading2}
                  </th>
                </tr>
              </thead>
              <tbody>
                {MyTableData}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
