import Image from "../Images/AboutUs-img.jpg";

const StateOfCity = {
  Heading: "Creative Environmental Solutions",
  Sub_heading: "State-of-the-Art facility",
  para: [
    {
      para1:
        "As larger industrial stakeholders collaborate to address the cost and infrastructure obstacles, Creative Environmental Solutions, with its cutting-edge facility located in the Silicon Valley of India, is establishing itself as a competitive and customer-centric provider of customized environmental testing solutions. This approach aims to foster customer partnerships and drive business growth.",
      para2: "Corporate Office: INDIA",
    },
  ],
  Image: (
    <img
      className="creative-env-img"
      src={Image}
      alt="Creative Environmental Solutions"
    />
  ),
};

export default StateOfCity;
