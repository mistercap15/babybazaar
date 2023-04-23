import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/baby1.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h4 className="primary-heading">
        Adorable and Affordable: Discover Our Collection of Baby Clothes Today!
        </h4>
        <p className="primary-text">
        At our store, we don't just sell baby clothes - we create memories.
        </p>
        <p className="primary-text">
        We know how important those first moments are, which is why we offer a wide range of clothing options for newborns, infants, and toddlers.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
