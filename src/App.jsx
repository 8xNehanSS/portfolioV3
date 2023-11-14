import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import HeroSection from "./components/HeroSection/HeroSection";
import { useEffect, useState } from "react";
import Footer from "./components/Footer/Footer";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function watchWidth() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", watchWidth);

    return function () {
      window.removeEventListener("resize", watchWidth);
    };
  }, []);
  return (
    <>
      <NavBar window={windowWidth} />
      <HeroSection window={windowWidth} />
      <Footer />
    </>
  );
}

export default App;
