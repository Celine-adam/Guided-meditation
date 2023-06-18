import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../../img/vecteezy_vector-illustration-of-a-girl-in-a-yoga-pose-without-a-face_11426491.jpg";

export default function CoverPage() {
  return (
    <div id="cover-page">
      <div className="btn-container">
        <Link to="/login" className="btn-cover">
          Log in
        </Link>
        <Link to="/signup" className="btn-cover">
          Sign up
        </Link>
      </div>
      <div className="cover-container">
        <div className="left">
          <img src={heroImage} alt="" />
        </div>
        <div className="right">
          <p className="subheading">Be calm</p>
          <h2 className="heading">
            <div className="wrapper">
              <span>Embrace </span>
              <span className="name">Life</span>
            </div>
          </h2>
          <h2 className="heading subheading-tow">with</h2>
          <p className="desc">
            Daily Affirmations and Positive Messages for an Empowered Mindset
          </p>
        </div>
      </div>
    </div>
  );
}
