import React from 'react'
import './Style/Section8.css'
import Table from "react-bootstrap/Table";
const Section8 = (props) => {
    const MyTableData = props.data.Section14.Table_data.map((data, index) => {
        return (
          <tr>
            <td className="Bump-Section5-td1">{data.ShakerModel.split('\n').map(str => <p>{str}</p>)}</td>
            <td className="Bump-Section5-td">{data.AmplifierModel.split('\n').map(str => <p>{str}</p>)}</td>
            <td className="Bump-Section5-td">{data.SystemRating.split('\n').map(str => <p>{str}</p>)}</td>
            <td className="Bump-Section5-td">{data.PowerOutput.split('\n').map(str => <p>{str}</p>)}</td>
            <td className="Bump-Section5-td">{data.Enclosure.split('\n').map(str => <p>{str}</p>)}</td>
          </tr>
        );
      });
  return (
    <div className="Bump-Section5-1">
      <div className="container Bump-Section5-2">
        <div className="row Bump-Section5-2">
          <div className='col-lg-10 col-12'>
            <h2 className='Bump-Section5-h2'>{props.data.Section14.Heading}</h2>
          </div>
          <div className="col-lg-10 col-12">
            <Table striped bordered >
              <thead>
                <tr className="Bump-Section5-tr">
                  <th className="Bump-Section5-th">
                    {props.data.Section14.Table_Heading}
                  </th>
                  <th className="Bump-Section5-th">
                    {props.data.Section14.Table_Heading2}
                  </th>
                  <th className="Bump-Section5-th">
                    {props.data.Section14.Table_Heading3}
                  </th>
                  <th className="Bump-Section5-th">
                    {props.data.Section14.Table_Heading4}
                  </th>
                  <th className="Bump-Section5-th">
                    {props.data.Section14.Table_Heading5}
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

export default Section8