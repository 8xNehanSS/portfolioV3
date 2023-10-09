import "./navbar.css";
import { useEffect, useState } from "react";

const NavBar = (props) => {
  const styles = {
    show: {
      display: "block",
    },
    setmargin: {
      marginLeft: "50px",
    },
  };
  let name;
  {
    props.window < 1150 ? (name = "NSS") : (name = "NehanSS");
  }
  let navlinks;
  const [clicked, setClicked] = useState(false);
  function handleClick(e) {
    setClicked((prevState) => !prevState);
    console.log(clicked);
  }
  {
    props.window > 1150
      ? (navlinks = (
          <ul className="nav-container">
            <li className="nav-link">
              <a href="#home">Home</a>
            </li>
            <li className="nav-link">About me</li>
            <li className="nav-link">Technologies</li>
            <li className="nav-link">Projects</li>
            <li className="nav-link">Contact</li>
          </ul>
        ))
      : (navlinks = (
          <div class="dropdown">
            <button class="dropbtn" onClick={handleClick}>
              <img src="../../assets/images/nav.png" width="45px" />
              <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content" style={clicked ? styles.show : null}>
              <a href="#">About me</a>
              <a href="#">Technologies</a>
              <a href="#">Projects</a>
              <a href="#">Contact</a>
            </div>
          </div>
        ));
  }

  return (
    <nav id="home">
      <div className="navbar">
        <p
          className="nav-heading"
          style={props.window < 1150 ? styles.setmargin : null}
        >
          8x<span className="white">{name}</span>.dev
        </p>
        {navlinks}
      </div>
    </nav>
  );
};

export default NavBar;
