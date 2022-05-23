import { ProjectType } from "types/project";
import "./styles.css";

type Props = {
  project: ProjectType;
};

const ProjectCard = ({ project }: Props) => {
  return (
    <div className="container">
      <div className="card-container">
        <div className="card-text">
          <p>{project.text}</p>
          <a href={project.link} target="_blank" rel="noreferrer">
            Repositório
          </a>
        </div>
        <div className="card">
          <div className="card-wrapper">
            <a href={project.note} target="_blank" rel="noreferrer">
              <h2>{project.title}</h2>
              <p>Desafio - {project.name}</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
