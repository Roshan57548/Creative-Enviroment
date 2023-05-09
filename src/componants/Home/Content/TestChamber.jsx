import Images_1 from "../Images/tc_image1.png";
import Images_2 from "../Images/tc_image2.png";
import Images_3 from "../Images/tc_image3.png";
import Images_4 from "../Images/tc_image4.png";
import Images_5 from "../Images/tc_image5.png";
import Images_6 from "../Images/tc_image6.png";
import Images_7 from "../Images/tc_image7.png";
import Images_8 from "../Images/tc_image8.png";
import Images_9 from "../Images/tc_image9.png";
import Images_10 from "../Images/tc_img10.jpg";
const TestChamber = {
  images: [
    { img: Images_1 },
    { img: Images_2 },
    { img: Images_3 },
    { img: Images_4 },
    { img: Images_5 },
    { img: Images_6 },
  ],

  heading: "PRODUCT",
  sub_heading: "Complete Environmental Conditions Simulation Under one Roof…",
  para: "The CENVS team is specialised to customize and develop any kind of environmental simulation equipment. CENVS is a globally well-known venture for its technical strengths, providing environmental testing solutions for electronics, automotive, defence, aerospace and various other industry applications.",
  cards: [
    {
      card_image: <img className="tc_image7" src={Images_7} alt="" />,
      card_heading: "Best in Quality",
    },
    {
      card_image: <img className="tc_image8" src={Images_8} alt="" />,
      card_heading: "Optimal Solutions",
    },
    {
      card_image: <img className="tc_image9" src={Images_9} alt="" />,
      card_heading: "Customer choices",
    },
    {
      card_image: <img className="tc_image10" src={Images_10} alt="" />,
      card_heading: "Wide Variety",
    },
  ],
};

export default TestChamber;
