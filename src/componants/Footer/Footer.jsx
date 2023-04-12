import React from "react";
import "./Style/Footer.css";
import HomeIcon from "@mui/icons-material/Home";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
const Footer = () => {
  return (
    <div>
      <footer>
        <div class="row primary">
          <div class="column about">
            <h3>ENVYSIS</h3>

            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo,
              nihil nisi quo quisquam veniam cumque ex officia neque, quidem
              labore laborum! Cum vel facilis fugiat culpa beatae dicta
              obcaecati exercitationem ab eaque ipsam qui incidunt repellat
              iusto aliquid possimus fuga dolores, animi nam ex ipsa
              consectetur! Nesciunt molestias sunt reprehenderit.
            </p>

            <div class="social">
              <i class="fa-brands fa-facebook-square"></i>
              <i class="fa-brands fa-instagram-square"></i>
              <i class="fa-brands fa-twitter-square"></i>
              <i class="fa-brands fa-youtube-square"></i>
              <i class="fa-brands fa-whatsapp-square"></i>
            </div>
          </div>

          <div class="column links">
            <h3>Some Links</h3>

            <ul>
              <li>
                <a href="#faq">Home</a>
              </li>
              <li>
                <a href="#cookies-policy">About</a>
              </li>
              <li>
                <a href="#terms-of-services">Products</a>
              </li>
              <li>
                <a href="#support">Services</a>
              </li>
              <li>
                <a href="#support">Testing Services</a>
              </li>
              <li>
                <a href="#support">Blog</a>
              </li>
              <li>
                <a href="#support">Contact Us</a>
              </li>
            </ul>
          </div>

          <div class="column links">
            <h3>Premium Poducts</h3>
            <ul>
              <li>
                <a href="#faq">Environmental Test </a>
              </li>
              <li>
                <a href="#cookies-policy">Dust Chamber</a>
              </li>
              <li>
                <a href="#terms-of-services">Thermal Stock Chamber</a>
              </li>
              <li>
                <a href="#support">Vibration Chamber</a>
              </li>
              <li>
                <a href="#support">Salt Spray Chamber</a>
              </li>
            </ul>
          </div>

          <div class="column links">
            <h3>Contact-Info</h3>
            <ul>
              <li>
                <HomeIcon />
                <a href="#faq">366 Fawn St. Oak Creek, WI 53154</a>
              </li>
              <li>
                <CallIcon />
                <a href="#cookies-policy">+91 8707321772 +91 87654321289</a>
              </li>
              <li>
                <EmailIcon />
                <a href="#terms-of-services">Vratantsingh@123gmail.com</a>
              </li>
              <li>
                <a href="#support">Support</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
