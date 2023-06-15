/* eslint-disable no-unused-vars */
import React from "react";
import "./Style/Accelerometers_Signal_Filters.css";
import Section1 from "./Component/Section1";
import Section2 from "./Component/Section2";
import Sections2 from "./Content/Section2";
import Section3 from "./Component/Section3";
import Sections3 from "./Content/Section3";
import Section4 from "./Component/section4";
const Accelerometers_Signal_Filters = () => {
  return (
    <div className="Accelerometers_Signal_Filters">
      <Section1/>
      <Section2 data={Sections2}/>
      <Section3 data={Sections3}/>
      <Section4/>
    </div>
  );
};

export default Accelerometers_Signal_Filters;
