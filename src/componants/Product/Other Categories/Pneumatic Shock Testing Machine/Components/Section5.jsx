import React from 'react'
import './Style/Section5.css'
import Table from "react-bootstrap/Table";
const Section5 = (props) => {
    const MyTableData = props.data.Section_5.Table_data.map((data, index) => {
        return (
          <tr>
            <td className="Bump-Section5-td1">{data.Model.split('\n').map(str => <p>{str}</p>)}</td>
            <td className="Bump-Section5-td">{data.DBTM6060.split('\n').map(str => <p>{str}</p>)}</td>
            <td className="Bump-Section5-td">{data.DBTM7575.split('\n').map(str => <p>{str}</p>)}</td>
            <td className="Bump-Section5-td">{data.DBTM1010.split('\n').map(str => <p>{str}</p>)}</td>
            <td className="Bump-Section5-td">{data.DBTM6060H.split('\n').map(str => <p>{str}</p>)}</td>
          </tr>
        );
      });
  return (
    <div className="Bump-Section5-1">
      <div className="container Bump-Section5-2">
        <div className="row Bump-Section5-2">
          <div className='col-lg-10 col-12'>
            <h2 className='Bump-Section5-h2'>{props.data.Section_5.Heading}</h2>
          </div>
          <div className="col-lg-10 col-12">
            <Table striped bordered >
              <thead>
                <tr className="Bump-Section5-tr">
                  <th className="Bump-Section5-th">
                    {props.data.Section_5.Table_Heading}
                  </th>
                  <th className="Bump-Section5-th">
                    {props.data.Section_5.Table_Heading2}
                  </th>
                  <th className="Bump-Section5-th">
                    {props.data.Section_5.Table_Heading3}
                  </th>
                  <th className="Bump-Section5-th">
                    {props.data.Section_5.Table_Heading4}
                  </th>
                  <th className="Bump-Section5-th">
                    {props.data.Section_5.Table_Heading5}
                  </th>
                </tr>
              </thead>
              <tbody>
                {MyTableData}
              </tbody>
            </Table>
          </div>
          <div className='col-lg-10 col-12'>
            <p>
                {props.data.Section_5.Table_Para}
            </p>
            <h4 className='Bump-Section5-h4'>
                Note : {props.data.Section_5.Note}
            </h4>
            <p>
                {props.data.Section_5.Note_Para}  
            </p>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Section5