import Contact from "components/Contact";
import About from "pages/About";
import Login from "pages/Admin/Auth/Login";
import Project from "../Project";
import "./styles.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-about-container">
        <About />
      </div>
      <Project />

      <div className="home-contact-container">
        <Contact />
      </div>
      <div className="container home-login-container">
        <Login />
      </div>
    </div>
  );
};

export default Home;
