import React from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";

import { SiNotion, SiGmail } from "react-icons/si";
import "./HeroSection.css";

function HeroSection({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headLine,
  description,
  buttonLabel,
  img,
  alt,
  imgStart,
}) {
  return (
    <>
      <div
        className={lightBg ? "home_hero-section" : "home_hero-section darkBg"}
      >
        <div className="container">
          <div
            className="row home_hero-row"
            style={{
              display: "flex",
              flexDirection: imgStart === "start" ? "row-reverse" : "row",
            }}
          >
            <div className="col">
              <div className="home_hero-text-wrapper">
                <div className="top-line">{topLine}</div>
                <h1 className={lightText ? "heading" : "headingDark"}>
                  {headLine}
                </h1>
                <p
                  className={
                    lightTextDesc
                      ? "home_hero-subtitle"
                      : "home_hero-subtitle dark"
                  }
                >
                  {description}
                </p>
                <div className="social-icons">
                  <Link
                    className="social-icon-link"
                    to="//www.instagram.com/shung.fu_/"
                    target="_blank"
                    aria-label="Instagram"
                  >
                    <FaInstagram />
                  </Link>
                  <Link
                    className="social-icon-link"
                    to={"//www.notion.so/"}
                    target="_blank"
                    aria-label="Notion"
                  >
                    <SiNotion />
                  </Link>
                  <Link
                    className="social-icon-link"
                    to="//github.com/shungfu"
                    target="_blank"
                    aria-label="Github"
                  >
                    <FaGithub />
                  </Link>
                </div>
                {/* <Link to="/signup">
                  <Button buttonSize="btn--wide" buttonColor="blue">
                    {buttonLabel}
                  </Button>
                </Link> */}
              </div>
            </div>
            <div className="col">
              <div className="home_hero-img-wrapper">
                <img src={img} alt={alt} className="home_hero-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
