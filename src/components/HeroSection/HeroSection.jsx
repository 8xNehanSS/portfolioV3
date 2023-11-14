import { useState, useEffect } from "react";
import "./herosection.css";
import TypingComp from "../helpers/TypingComp/TypingComp";

const HeroSection = (props) => {
  return (
    <>
      <div className="hero-spacing"></div>
      <div className="hero">
        <div
          className="hero-firstcont"
          style={
            props.window < 1250
              ? {
                  display: "grid",
                  placeItems: "center",
                  gap: "30px",
                }
              : {}
          }
        >
          <div className="hero-image">
            <img
              className="hero-picimage"
              src="../../assets/images/profilepicture.png"
            ></img>
          </div>
          <div>
            <div className="hero-typing">
              <TypingComp window={props.window} />
            </div>
            <div className="hero-text">
              <p
                style={
                  props.window < 1250
                    ? {
                        textAlign: "justify",
                      }
                    : {}
                }
              >
                Highly skilled and logical Software Engineer with a passion for
                problem-solving and a quick learning ability. Enabling me to
                deliver efficient code solutions. Committed to excellence, I
                thrive in dynamic environments. Let's connect and discuss how I
                can contribute to your organization's success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
