import tc_image from "../../../assets/tc_image.png"
import Images_1 from '../../../Image/Home/Manfacturing-1.jpg';
import Images_2 from '../../../Image/Home/Manfacturing-2.jpg';
import Images_3 from '../../../Image/Home/Manfacturing-3.jpg';
const TestChamber = {
    Image:<img className='tc_img' src={tc_image} alt="" />,
    heading:"PRODUCTS",
    sub_heading:"Everything You Need In A Test Chamber",
    para:"Creative Environmental Solutions has been a leader in the design, manufacturing, and supply of environmental test chambers for various industries, including electronics, automotive, defense, aerospace, and more. One of the key strengths of Creative Environmenta Solutions has been its ability to customize requirements to meet the specific needs of its clients.",
    cards:[
        {
            card_image:<img  className='tc_lc_img' src={Images_1} alt="" />,
            card_heading:"Award for manufacturing excellence",
            card_desp:"Award winner for excellence in manufacturing products."
        },
        {
            card_image:<img  className='tc_lc_img' src={Images_2} alt="" />,
            card_heading:"Awarded for Business Excellence",
            card_desp:"Award winner in recognition of its outstanding supply and services."
        },
        {
            card_image:<img  className='tc_lc_img' src={Images_3} alt="" />,
            card_heading:"Awarded for Entrepreneurial Excellence",
            card_desp:"Award winner for entrepreneurial excellence."
        }
    ]

};

export default TestChamber;