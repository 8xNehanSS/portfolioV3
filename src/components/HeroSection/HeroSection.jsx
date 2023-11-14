import { useState, useEffect } from "react";
import "./herosection.css";
import TypingComp from "../helpers/TypingComp/TypingComp";

const HeroSection = (props) => {
  let typing;
  {
    props.window > 700
      ? (typing = (
          <div className="hero-typing">
            <TypingComp />
          </div>
        ))
      : (typing = null);
  }
  return (
    <>
      <div className="hero-spacing"></div>
      <div className="hero">{typing}</div>
    </>
  );
};

export default HeroSection;
