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
        return newID;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  console.log(textid);
  return (
    <>
      <div className="hero-spacing"></div>
      <div className="hero">
        <p className="blue hero-heading">{text[textid]}</p>
      </div>
    </>
  );
};

export default HeroSection;
