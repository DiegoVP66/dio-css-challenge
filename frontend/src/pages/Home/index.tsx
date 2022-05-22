import Contact from "components/Contact";
import Footer from "components/Footer";
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

      <div className="home-contact-container">
        <Contact />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
