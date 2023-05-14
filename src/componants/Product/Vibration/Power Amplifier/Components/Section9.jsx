import React from 'react'
import './Style/Section8.css'
import Table from "react-bootstrap/Table";
const Section9 = (props) => {
    const MyTableData = props.data.Section14.Table_data2.map((data, index) => {
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
            <h2 className='Bump-Section5-h2'>{props.data.Section14.Heading2}</h2>
          </div>
          <div className="col-lg-10 col-12">
            <Table striped bordered >
              <thead>
                <tr className="Bump-Section5-tr">
                  <th className="Bump-Section5-th">
                    {props.data.Section14.Table_Heading21}
                  </th>
                  <th className="Bump-Section5-th">
                    {props.data.Section14.Table_Heading22}
                  </th>
                  <th className="Bump-Section5-th">
                    {props.data.Section14.Table_Heading32}
                  </th>
                  <th className="Bump-Section5-th">
                    {props.data.Section14.Table_Heading42}
                  </th>
                  <th className="Bump-Section5-th">
                    {props.data.Section14.Table_Heading52}
                  </th>
                </tr>
              </thead>
              <tbody>
                {MyTableData}
              </tbody>
            </Table>
          </div>
          <div className='col-lg-10 col-12'>
            <h4 className='Bump-Section5-h4'>
                Note : {props.data.Section14.Note}
            </h4>
            <p>
                {props.data.Section14.Note_Para}  
            </p>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Section9