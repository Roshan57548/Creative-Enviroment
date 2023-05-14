import { Link } from "react-router-dom";
import Image_1 from '../../../Image/WaterCooled.png';
const WaterMapContent = {
  Heading1:"Electro Dynamic Vibration Shaker System",
  para:" We share glorious credentials for manufacturing and supplying Electro Dynamic Vibration Shaker System throughout the Indian market. Perfectly designed and strongly constructed, our Vibration Shaker System can also be modified as per the specific demand of the buyers. Place orders with us, timely deliveries are what we ensure! Our prices are also marginal. Rely on us and place orders now!",
  Heading2:"Products-Series Water-Cooled-Components",
  Image: [
    {
      img: (
        <>
          <Link style={{textDecoration: 'none'}} to="/Vibration/Water-Cooled-CEV-500-Series">
            <img
              src={Image_1}
              alt=""
              className="Mappedimg"
            />
            <Link style={{textDecoration: 'none'}} to="/Vibration/Water-Cooled-CEV-500-Series" className="text-content-ac">
              <h6 className="text-ac" >Water-Cooled-Series <br/>CEW 500 Series</h6>
            </Link>
          </Link>
        </>
      ),
    },
    {
      img: (
        <>
          <Link style={{textDecoration: 'none'}} to="/Vibration/Water-Cooled-CEV-590-Series">
            <img
              src={Image_1}
              alt=""
              className="Mappedimg"
            />
            <Link style={{textDecoration: 'none'}} to="/Vibration/Water-Cooled-CEV-590-Series" className="text-content-ac">
              <h6 className="text-ac" >Water-Cooled-Series <br/>CEW 590 Series</h6>
            </Link>
          </Link>
        </>
      ),
    },
    {
      img: (
        <>
          <Link style={{textDecoration: 'none'}} to="/Vibration/Water-Cooled-CEV-760-Series">
            <img
              src={Image_1}
              alt=""
              className="Mappedimg"
            />
            <Link style={{textDecoration: 'none'}} to="/Vibration/Water-Cooled-CEV-760-Series" className="text-content-ac">
              <h6 className="text-ac" >Water-Cooled-Series <br/>CEW 760 Series</h6>
            </Link>
          </Link>
        </>
      ),
    },
  ],
};
export default WaterMapContent;
