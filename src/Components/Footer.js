import React from "react";
import { BsTwitter } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <h4>BabyBazaar</h4>
        </div>
        <div className="footer-icons">
          <BsTwitter />
          <FaInstagram />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Qualtiy</span>
          <span>Help</span>
          <span>Share</span>
          <span>Carrers</span>
          <span>Testimonials</span>
          <span>Work</span>
        </div>
        <div className="footer-section-columns">
          <span>+91-9033993640</span>
          <span>babybazaar@gmail.com</span>
          <span><FaLocationArrow/>&nbsp;&nbsp;&nbsp;&nbsp; 1,Pride Corporate,Kalawad Road,Rajkot</span>
          <span><FaLocationArrow/>&nbsp;&nbsp;&nbsp;&nbsp; 705,TwinStar,150 ft Ring Road,Rajkot</span>
        </div>
        <div className="footer-section-columns">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
