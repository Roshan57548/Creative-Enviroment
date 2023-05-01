import React from 'react'
import './Style/Section3.css'

const Section3 = (props) => {
  return (
    <div className='Section3_Container'>
        <div className="section3_wrapper">
            <h5>{props.data.fixed}</h5>
            <h2 className='section3_header'>{props.data.heading}</h2>
            <div className="section3_border"></div>
            <div className="section3_lists">
                <div className="section3_list_left">
                    <ul>
                        <li>{props.data.first.li1}</li>
                        <li>{props.data.first.li2}</li>
                        <li>{props.data.first.li3}</li>
                        <li>{props.data.first.li4}</li>
                        <li>{props.data.first.li5}</li>
                    </ul>
                </div>
                <div className="section3_list_right">
                <ul>
                <li>{props.data.second.li1}</li>
                <li>{props.data.second.li2}</li>
                <li>{props.data.second.li3}</li>
                <li>{props.data.second.li4}</li>
                <li>{props.data.second.li5}</li>
                    </ul>
                </div>
                <div className="section3_table">
                    <table >
                        <th>{props.data.table.heading}</th>
                        <tr >
                            <td className='section3_tbl'>{props.data.table.first.ldesc}</td>
                            <td className='section3_tbl'>{props.data.table.first.rdesc}</td>
                        </tr>
                        <tr>
                            <td className='section3_tbl'>{props.data.table.second.ldesc}</td>
                            <td className='section3_tbl'>{props.data.table.second.rdesc}</td>
                        </tr>
                        <tr>
                            <td className='section3_tbl'>{props.data.table.third.ldesc}</td>
                            <td className='section3_tbl'>{props.data.table.third.rdesc}</td>
                        </tr>
                    </table>
                </div>
            </div>
            <div className="section3_tagline">
                <p>{props.data.sht}</p>
       </div>
            <div className="section3_paras">
                <p>{props.data.desc}</p>
            </div>
        </div>

    </div>
  )
}

export default Section3