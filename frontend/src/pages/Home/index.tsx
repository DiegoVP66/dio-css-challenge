import About from "pages/About";
import Project from "../Project";
import "./styles.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-about-container">
        <About />
      </div>
      <Project />
    </div>
  );
};

export default Home;
