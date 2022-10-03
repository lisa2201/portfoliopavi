import React from "react";
import Typical from "react-typical";
import ScrollService from "../../../utilities/ScrollService";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
            <a href="https://www.facebook.com/pavi.santh.31" target="_blank">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/paviththira-shantharoopan-85874820b/"
                target="_blank"
              >
                <i className="fa fa-linkedin-square"></i>
              </a>
              <a href="https://www.instagram.com/_pavixx_/" target="_blank">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://twitter.com/?lang=en" target="_blank">
                <i className="fa fa-twitter"></i>
              </a>

              <a href="https://www.youtube.com/" target="_blank">
                <i className="fa fa-youtube-square"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">Pavi</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Ethusiastic Dev 😎",
                    5000,
                    "Full Stack Developer 💻",
                    5000,
                    "React/React Native Dev 📱",
                    5000,
                    "UI designer 📊",
                    5000,
                  ]}
                />
              </h1>
            </span>
            <span className="profile-role-tagline">
              Knack of building applications with front and back end operations.
            </span>
          </div>

          <div className="profile-options">
            <button className="btn primary-btn"
            onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            > Hire Me </button>
            <a href="pavi.pdf" download="Pavi.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
