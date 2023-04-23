import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/baby.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h4 className="primary-heading">
          Welcome to Our Baby Clothing Store: Where Comfort and Style Meet!
          </h4>
          <p className="primary-text">
          Welcome to our baby clothing store, where we believe that every little one deserves to be dressed in the best. Our mission is to provide parents and guardians with a wide range of high-quality, comfortable and stylish baby clothes at affordable prices.
          </p>
          <button className="secondary-button">
           Contact US <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
