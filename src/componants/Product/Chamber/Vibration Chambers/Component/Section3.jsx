import React from "react";
import "./Style/Section3.css"
const Section3 = (props) => {
  return (
    <>
      <section className="Test-Performance-Charts">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="Section3">
                <h2 className="const ">{props.data.Heading1}</h2>
                <ul>
                  <li>
                    {props.data.First_list1}
                  </li>
                  <li>
                  {props.data.First_list2}
                  </li>
                  <li>
                  {props.data.First_list3}
                  </li>
                  <li>{props.data.First_list4}</li>
                  <li>{props.data.First_list5}</li>
                  <li>{props.data.First_list6}</li>
                  <li>{props.data.First_list7}</li>
                  <li>
                  {props.data.First_list8}
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="col-md-12 specific-points Section3">
                <table className="table table-responsive table-bordered Section3_models">
                  <tbody>
                    <tr>
                      <th>{props.data.Tableheading1}</th>
                      <th>{props.data.Tableheading2}</th>
                    </tr>
                    <tr>
                      <td>{props.data.Content1}</td>
                      <td>{props.data.Content1ans}</td>
                    </tr>
                    <tr>
                      <td>{props.data.Content2}</td>
                      <td>{props.data.Content2ans}</td>
                    </tr>
                    <tr>
                      <td>{props.data.Content3}</td>
                      <td>{props.data.Content3ans}</td>
                    </tr>
                    <tr>
                      <td>{props.data.Content4}</td>
                      <td>{props.data.Content4ans}</td>
                    </tr>
                    <tr>
                      <td>{props.data.Content5}</td>
                      <td>{props.data.Content5ans}</td>
                    </tr>
                    <tr>
                      <td>{props.data.Content6}</td>
                      <td>{props.data.Content6ans}</td>
                    </tr>
                    <tr>
                      <td>{props.data.Content7}</td>
                      <td>{props.data.Content7ans}</td>
                    </tr>
                    <tr>
                      <td>{props.data.Content8}</td>
                      <td>{props.data.Content8ans}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 Section3_text" >
              <div className="space20"></div>
              <p>
                {props.data.Para1}
              </p>
              <p>
               {props.data.Para2}
              </p>
              <p>
                {props.data.Para3}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section3;
