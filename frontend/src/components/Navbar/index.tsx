import Dname from "../../assets/img/D.svg";

import "./styles.css";

const Navbar = () => {
  return (
    <nav className="nav-wrapper">
      <div>
        <div className="checkbox-container">
          <div className="checkbox-wrapper">
            <input type="checkbox" id="toggle" />
            <label className="checkbox" htmlFor="toggle">
              <div className="trace"></div>
              <div className="trace"></div>
              <div className="trace"></div>
            </label>
            <div className="menu"></div>
            <div className="menu-img">
              <img src={Dname} alt="" />
            </div>
            <div className="menu-items">
              <ul>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#about">Sobre</a>
                </li>
                <li>
                  <a href="#projects">Projetos</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <h1>Diego Vicente Pereira</h1>
      <h2>Fullstack Developer</h2>
      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/diego-vicente-pereira-212647212/"
          target="_blank"
          rel="noreferrer"
        >
          Linkedin
        </a>
        <a href="https://github.com/DiegoVP66" target="_blank" rel="noreferrer">
          Github
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
