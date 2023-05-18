import React from "react";
import "./Style/Section2.css";
import Image_1 from "./Image/image_2.png";
const Section2 = () => {
  return (
    <div className="rc_s2_container">
      <div className="rc_s2_wrapper">
        <div className="rc_s2_uppersec">
          <div className="rc_s2_left">
            <h2 className="rc_s2_head">Industrial Walk in Rain Test Chamber</h2>
            <p>
              A test chamber such as the industrial rain spray test chamber is a
              managed and controlled environment where equipment, products, and
              chemicals are put to the test to see how long they can last, how
              stable they are, and how practical they are. They are a controlled
              environment that simulates the effects of environmental conditions
              that a product may encounter while in use. Temperature extremes,
              moist or humid settings, and significant altitude changes are all
              created in test chambers that have been programmed. Aside from
              environmental factors, test chambers can be constructed and
              calibrated to use physical forces like inertia, vibration, and
              destructive impact to push a product's boundaries. During their
              service life, products are exposed to a variety of atmospheric
              agents as well as fluctuations in temperature and humidity. Rain
              accelerates the degradation process. Lighting, satellite dishes,
              and autos are all tested in the rain spray test chamber because
              they are exposed to the outdoors on a regular basis. These
              products must work dependably in a variety of rain circumstances.
              Climate and climatic test chambers are a subset of the
              environmental test chambers that include the rain spray test
              chamber. Its purpose is to test a product's waterproofing
              capabilities by imitating a soggy, rainy environment. Electronics,
              solar rights, underground lights, car lights, fountain lights,
              automobile parts, garden lights, tunnel lights, and other products
              all make use of the Rain Spray Test Chamber12.
            </p>
          </div>
          <div className="rc_s2_right">
            <div>
              <img className="rc_s2_uimg" src={Image_1} alt="" />
            </div>
            <div className="rc_s2_lcon">
              <p>
                Touch screen based complete user-programmable console capable of
                controlling and monitoring rain test parameters viz., pressure,
                set duration etc.,
              </p>
            </div>
          </div>
        </div>
        <div className="rc_s2_lowersec">
          <p>
            Being one of the foremost manufacturers and suppliers of industrial
            rain spray test chamber products in India, CENVS has built up a
            wealth of testing experience over the years and, because of their
            versatility, can construct customized rain spray test chamber
            products to fulfill every testing requirement as well as special
            customer requirements. We offer the engineering design capabilities
            and knowledge to customize industrial rain test chamber products to
            specific configurations or performance requirements.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section2;
