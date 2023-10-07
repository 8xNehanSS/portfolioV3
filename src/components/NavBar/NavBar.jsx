import "./navbar.css";

const NavBar = () => {
  return (
    <nav id="home">
      <div className="navbar">
        <p className="nav-heading">
          8x<span className="white">NehanSS</span>.dev
        </p>
        <ul className="nav-container">
          <li className="nav-link">
            <a href="#home">Home</a>
          </li>
          <li className="nav-link">About me</li>
          <li className="nav-link">Technologies</li>
          <li className="nav-link">Projects</li>
          <li className="nav-link">Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
