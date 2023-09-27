import React from "react";
import camra from "../Assets/cam.png";

import "./home.css";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="home-wraper">
          <div className="home-text">
            <h1 className="welcome-text">
              ideal medea where <br />
              perfection is key
            </h1>
          </div>
          <div className="drone-image">
            <img src={camra} alt="done" />
          </div>
        </div>
      </div>
      <div className="about-container" id="about"></div>
      <div className="contact-container" id="contact"></div>
    </>
  );
};

export default Home;
