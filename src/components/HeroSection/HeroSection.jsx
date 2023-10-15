import { useState, useEffect } from "react";
import "./herosection.css";

const HeroSection = () => {
  const text = ["Full Stack Developer", "Test1", "Test2"];
  const [textid, settextid] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      settextid((prevID) => {
        let newID = prevID + 1;
        if (newID === 3) {
          newID = 0;
        }
        setWidth(0);
        return newID;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  const [widTH, setWidth] = useState(0);
  let styles = {
    show: {
      display: "block",
    },
    setWWidth: {
      width: { widTH },
    },
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setWidth((prevWidth) => {
        let newWidth;
        if (prevWidth < 900) {
          newWidth = prevWidth + 10;
        } else {
          newWidth = prevWidth + 0;
        }
        return newWidth;
      });
    }, 10);

    return () => clearInterval(interval);
  }, []);
  console.log(widTH);
  console.log(textid);
  return (
    <>
      <div className="hero-spacing"></div>
      <div className="hero">
        <div className="hero-cont" style={{ width: widTH, overflow: "hidden" }}>
          <span className="blue hero-heading">{text[textid]}</span>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
