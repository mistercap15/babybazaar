import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
        So come explore our collection and see for yourself why our baby clothing store is the go-to destination for parents who want the best for their little ones.
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img clasname="profile" src={ProfilePic} alt="" />
        <p>
        I've been shopping at this baby store for months and I'm so impressed with the quality of their clothes! They're not only cute, but they're also durable and practical.
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Nikunj P</h2>
      </div>
    </div>
  );
};

export default Testimonial;
