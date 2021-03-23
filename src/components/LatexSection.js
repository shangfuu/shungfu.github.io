import React from "react";
import { Link } from "react-router-dom";
import "./HeroSection.css";
import "./LatexSection.css"
import { MathComponent } from "mathjax-react";

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
            <div className="col-latex">
              <div className="home_latex-text-wrapper">
                <div className="top-line">{topLine}</div>
                <h1 className={lightText ? "heading" : "headingDark"}>
                  {headLine}
                </h1>
                <p className="latex_field">
                  <MathComponent tex={description} />
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
