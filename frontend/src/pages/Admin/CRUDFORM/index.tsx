import { AxiosRequestConfig } from "axios";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { ProjectType } from "types/project";
import { makeBackendRequest } from "util/request";

import "./styles.css";

type UrlParams = {
  projectId: string;
};

const ProjectCRUDForm = () => {
  const { projectId } = useParams<UrlParams>();

  const isEditing = projectId;

  const history = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<ProjectType>();

  useEffect(() => {
    if (isEditing) {
      makeBackendRequest({ url: `/projects/${projectId}` }).then((response) => {
        const project = response.data as ProjectType;
        setValue("title", project.title);
        setValue("name", project.name);
        setValue("text", project.text);
        setValue("note", project.note);
        setValue("link", project.link);
      });
    }
  }, [isEditing, projectId, setValue]);

  const onSubmit = (formData: ProjectType) => {
    const data = {
      ...formData,
    };

    const config: AxiosRequestConfig = {
      method: isEditing ? "PUT" : "POST",
      url: isEditing ? `/projects/${projectId}` : `/projects`,
      data: data,
      withCredentials: true,
    };

    makeBackendRequest(config)
      .then(() => {
        history("/admin/crud");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleCancel = () => {
    history("/admin/crud");
  };

  return (
    <div className="project-form-crud-container">
      <div className="project-form-crud">
        <h1>Project Form</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="form-crud">
          <input
            {...register("title", {
              required: "Required field",
            })}
            type="text"
            className={`form-control ${errors.title ? "is-invalid" : ""}`}
            placeholder="Title"
            name="title"
          />
          {errors.title && (
            <div className="invalid-feedback d-block">Required field</div>
          )}

          <input
            {...register("name", {
              required: "Required field",
            })}
            type="text"
            className={`form-control base-input ${
              errors.name ? "is-invalid" : ""
            }`}
            placeholder="Name"
            name="name"
          />
          {errors.name && (
            <div className="invalid-feedback d-block">Required field</div>
          )}

          <textarea
            {...register("text", {
              required: "Required field",
            })}
            className={`form-control base-input ${
              errors.text ? "is-invalid" : ""
            }`}
            placeholder="Description"
            name="text"
          />
          {errors.text && (
            <div className="invalid-feedback d-block">Required field</div>
          )}

          <input
            {...register("note", {
              required: "Required field",
            })}
            type="text"
            className={`form-control base-input ${
              errors.note ? "is-invalid" : ""
            }`}
            placeholder="Note"
            name="note"
          />
          {errors.note && (
            <div className="invalid-feedback d-block">Required field</div>
          )}

          <input
            {...register("link", {
              required: "Required field",
            })}
            type="text"
            className={`form-control base-input ${
              errors.note ? "is-invalid" : ""
            }`}
            placeholder="Repository"
            name="link"
          />
          {errors.link && (
            <div className="invalid-feedback d-block">Required field</div>
          )}
          <div className="form-button-container">
            <button className="btn btn-primary text-white">SAVE</button>
            <button
              className="btn btn-danger text-white btn-form-cancel mt-4"
              onClick={handleCancel}
            >
              CANCEL
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProjectCRUDForm;
