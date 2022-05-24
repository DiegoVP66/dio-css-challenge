import { AuthContext } from "AuthContextData";
import { useContext, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { isAuthenticated } from "util/auth";
import { removeAuthData } from "util/storage";
import { getTokenData } from "util/token";
import Dname from "../../assets/img/D.svg";

import "./styles.css";

const Navbar = () => {
  const history = useNavigate();

  const { authContextData, setAuthContextData } = useContext(AuthContext);

  useEffect(() => {
    if (isAuthenticated()) {
      setAuthContextData({
        authenticated: true,
        tokenData: getTokenData(),
      });
    } else {
      setAuthContextData({
        authenticated: false,
      });
    }
  }, [setAuthContextData]);

  const handleLogoutClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    removeAuthData();
    setAuthContextData({
      authenticated: false,
    });
    history("/");
  };
  return (
    <nav className="nav-wrapper" id="home">
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
            <div className="menu-items mt-4">
              <ul>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>

                <li>
                  <a href="#about">Sobre</a>
                </li>
                <li>
                  <a href="#projects">Projetos</a>
                </li>
                <li>
                  <a href="#contact">Contato</a>
                </li>
                <div className="btn-login-container">
                  {authContextData.authenticated ? (
                    <div className="logout-container">
                      <a href="#logout" onClick={handleLogoutClick}>
                        LOGOUT
                      </a>
                    </div>
                  ) : (
                    <NavLink to="/admin/auth">LOGIN</NavLink>
                  )}
                </div>
                <div className="crud-panel">
                  {authContextData.authenticated ? (
                    <>
                      <NavLink to="/admin/crud">ADM</NavLink>
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="name-stack">
        <h1>Diego Vicente Pereira</h1>
        <h2>Fullstack Developer</h2>
      </div>
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
