import { AboutType } from "types/about";
import Profile from "../../assets/img/profile.svg";
import "./styles.css";

type Props = {
  about: AboutType;
};

const AboutCard = ({ about }: Props) => {
  return (
    <div className="about-container">
      <div className="about-profile">
        <img src={Profile} alt="Desenho de um rosto masculino com barba" />
      </div>
      <div className="about-content-container">
        <h1>{about.title}</h1>
        <p>{about.description}</p>
      </div>
    </div>
  );
};

export default AboutCard;
