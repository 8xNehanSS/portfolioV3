import React, { useState, useEffect } from "react";

const TypingComp = (props) => {
  let size;
  let align;
  if (props.window < 750) {
    size = "1.5rem";
    align = "center";
  } else {
    size = "2rem";
    align = "left";
  }
  const fullTexts = [
    "Full Stack Developer..",
    "Frontend Web Developer..",
    "Backend Developer..",
  ];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prevShowCursor) => !prevShowCursor);
    }, 500);

    return () => {
      clearInterval(cursorInterval); // cleanup on unmount
    };
  }, []);

  useEffect(() => {
    let timer;

    if (isDeleting) {
      timer = setInterval(() => {
        setCurrentText((prevText) => prevText.slice(0, prevText.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentTextIndex(
            (prevIndex) => (prevIndex + 1) % fullTexts.length
          );
        }
      }, 20);
    } else {
      if (currentText.length === fullTexts[currentTextIndex].length) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else {
        timer = setInterval(() => {
          setCurrentText((prevText) =>
            fullTexts[currentTextIndex].slice(0, prevText.length + 1)
          );
        }, 50);
      }
    }

    return () => clearInterval(timer); // cleanup on unmount
  }, [currentText, currentTextIndex, isDeleting]);

  return (
    <div style={{ minHeight: "80px", fontSize: size, textAlign: align }}>
      {currentText}
      <span style={{ opacity: showCursor ? 1 : 0 }}>|</span>
    </div>
  );
};

export default TypingComp;
