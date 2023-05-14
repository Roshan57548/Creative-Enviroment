import React from 'react'
import './Style/Section5.css'
import Table from "react-bootstrap/Table";
const Section5 = (props) => {
    const MyTableData = props.data.section2.table1.System.map((row, index) => {
        return (
          <tr>
            <td className="Bump-Section5-td1">{row.Series_Amplifier}</td>
            <td className="Bump-Section5-td">{row.DSA_1k}</td>
            <td className="Bump-Section5-td">{row.DSA_2k}</td>
            <td className="Bump-Section5-td">{row.DSA_3k}</td>
            <td className="Bump-Section5-td">{row.DSA_4k}</td>
            <td className="Bump-Section5-td">{row.DSA_5k}</td>
            <td className="Bump-Section5-td">{row.DSA_15K}</td>
          </tr>
        );
      });
  return (
    <div className="Bump-Section5-1">
      <div className="container Bump-Section5-2">
        <div className="row Bump-Section5-2">
          <div className='col-lg-10 col-12'>
            <h2 className='Bump-Section5-h2'>{props.data.section2.heading}</h2>
          </div>
          <div className="col-lg-10 col-12">
            <Table striped bordered >
              <thead>
                <tr className="Bump-Section5-tr">
                  <th className="Bump-Section5-th">
                    {props.data.section2.table1.table_heading.head1}
                  </th>
                  <th className="Bump-Section5-th">
                    {props.data.section2.table1.table_heading.head2}
                  </th>
                  <th className="Bump-Section5-th">
                    {props.data.section2.table1.table_heading.head3}
                  </th>
                  <th className="Bump-Section5-th">
                    {props.data.section2.table1.table_heading.head4}
                  </th>
                  <th className="Bump-Section5-th">
                    {props.data.section2.table1.table_heading.head5}
                  </th>
                  <th className="Bump-Section5-th">
                    {props.data.section2.table1.table_heading.head6}
                  </th>
                  <th className="Bump-Section5-th">
                    {props.data.section2.table1.table_heading.head7}
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

export default Section5