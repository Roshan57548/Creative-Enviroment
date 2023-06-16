import React from "react";
import "./Style/Accelerometers_Signal_Filters.css";
import Section1 from "./Component/Section1";
import Section5 from "./Component/Section5";
import Section6 from "./Component/Section6";
import Section7 from "./Component/Section7";
import ContentSection5 from "./Component/Content/ContentSection5";
import ContentSection6 from "./Component/Content/contentSection6";
import ContentSection7 from "./Component/Content/contentSection7";
const Accelerometers_Signal_Filters = () => {
  return (
    <div className="Accelerometers_Signal_Filters">
      <Section1/>
      <Section5 data={ContentSection5}/>
      <Section6 data={ContentSection6}/>
      <Section7 data={ContentSection7}/>
    </div>
  );
};

export default Accelerometers_Signal_Filters;
