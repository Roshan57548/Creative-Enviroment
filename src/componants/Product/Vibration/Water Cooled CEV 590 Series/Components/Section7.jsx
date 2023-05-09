import React from "react";
import "./Style/Section7.css";
import Table from "react-bootstrap/Table";
const Section7 = (props) => {
  
  return (
    <div className="Bump-Section7-1">
      <div className="container Bump-Section7-2">
        <div className="row Bump-Section7-2">
          <div className="col-lg-10 col-12">
            <Table striped bordered>
              <thead>
                <tr className="Bump-Section7-tr">
                  <th className="Bump-Section7-th">
                    {props.data.section2.table3.table_heading}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="Bump-Section7-td1">
                    {props.data.section2.table3.right}
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section7;
