import "./styles.css";

type Props = {
  title: string;
  text: string;
  note: string;
  link: string;
  name: string;
};

const ProjectCard = ({ title, text, note, link, name }: Props) => {
  return (
    <div className="container">
      <div className="card-container">
        <div className="card-text">
          <p>{text}</p>
          <a href={link} target="_blank" rel="noreferrer">
            Repositório
          </a>
        </div>
        <div className="card">
          <div className="card-wrapper">
            <a href={note} target="_blank" rel="noreferrer">
              <h2>{title}</h2>
              <p>Desafio - {name}</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
