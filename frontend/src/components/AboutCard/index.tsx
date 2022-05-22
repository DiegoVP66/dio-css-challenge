import Profile from "../../assets/img/profile.svg";
import "./styles.css";

type Props = {
  title: string;
  text: string;
};

const AboutCard = ({ title, text }: Props) => {
  return (
    <div className="about-container">
      <div className="about-profile">
        <img src={Profile} alt="" />
      </div>
      <div className="about-content-container">
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default AboutCard;
