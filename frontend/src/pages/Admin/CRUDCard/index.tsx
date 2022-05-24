import { AxiosRequestConfig } from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ProjectType } from "types/project";
import { makeBackendRequest } from "util/request";

import "./styles.css";

type Props = {
  project: ProjectType;
  onDelete: Function;
};

const ProjectCRUDCard = ({ project, onDelete }: Props) => {
  const history = useNavigate();

  const handleDelete = (projectId: number) => {
    if (!window.confirm("tem certeza que deseja deletar?")) {
      return;
    }

    const config: AxiosRequestConfig = {
      method: "DELETE",
      url: `/projects/${projectId}`,
      withCredentials: true,
    };

    makeBackendRequest(config)
      .then(() => {
        onDelete();
        history("/admin/crud/create");
      })
      .catch((error) => {
        console.log("Erro ao deletar " + error);
      });
  };
  return (
    <div className="project-crud-card-container">
      <h1>{project.title}</h1>
      <h2>{project.name}</h2>
      <h4>{project.text}</h4>
      <p>{project.note}</p>
      <p>{project.link}</p>
      <div className="btn-project-crud-container">
        <div className="project-delete-button">
          <button
            className="btn btn-danger"
            onClick={() => handleDelete(project.id)}
          >
            DELETE
          </button>
        </div>
        <div>
          <Link to={`/admin/crud/${project.id}`}>
            <button className="btn btn-project-edit">EDIT</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCRUDCard;
