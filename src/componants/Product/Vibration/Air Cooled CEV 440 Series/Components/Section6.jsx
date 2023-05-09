import React from 'react'
import './Style/Section6.css'
import Table from "react-bootstrap/Table";
const Section6 = (props) => {
    const MyTableData = props.data.section2.table2.Armature.map((row, index) => {
        return (
          <tr>
            <td className="Bump-Section6-td1">{row.Armature_Insert_Pattern}</td>
            <td className="Bump-Section6-td">{row.SEV_125_Shaker1}</td>
            <td className="Bump-Section6-td">{row.SEV_125_Shaker2}</td>
            <td className="Bump-Section6-td">{row.SEV_125_Shaker3}</td>
          </tr>
        );
      });
  return (
    <div className="Bump-Section6-1">
      <div className="container Bump-Section6-2">
        <div className="row Bump-Section6-2">
          <div className="col-lg-10 col-12">
            <Table striped bordered >
              <thead>
                <tr className="Bump-Section6-tr">
                  <th className="Bump-Section6-th">
                    {props.data.section2.table2.table_heading.head1}
                  </th>
                  <th className="Bump-Section6-th">
                    {props.data.section2.table1.table_heading.head2}
                  </th>
                  <th className="Bump-Section6-th">
                    {props.data.section2.table1.table_heading.head2}
                  </th>
                  <th className="Bump-Section6-th">
                    {props.data.section2.table1.table_heading.head2}
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
  )
}

export default Section6