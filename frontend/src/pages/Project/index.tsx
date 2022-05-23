import { AxiosRequestConfig } from "axios";
import Pagination from "components/Pagination";
import ProjectCard from "components/ProjectCard";
import { useCallback, useEffect, useState } from "react";
import { ProjectType } from "types/project";
import { SpringPage } from "types/spring";
import { makeBackendRequest } from "util/request";

import "./styles.css";
type ControlComponentsData = {
  activePage: number;
};
const Project = () => {
  const [page, setPage] = useState<SpringPage<ProjectType>>();
  const [controlComponentsData, setControlComponentsData] =
    useState<ControlComponentsData>({
      activePage: 0,
    });
  const handlePageChange = (pageNumber: number) => {
    setControlComponentsData({
      activePage: pageNumber,
    });
  };

  const getProjects = useCallback(() => {
    const config: AxiosRequestConfig = {
      method: "GET",
      url: `/projects`,

      params: {
        page: controlComponentsData.activePage,
        size: 1,
      },
    };

    makeBackendRequest(config).then((response) => {
      setPage(response.data);
    });
  }, [controlComponentsData]);

  useEffect(() => {
    getProjects();
  }, [getProjects]);
  return (
    <div className="project-container" id="projects">
      {page?.content.map((item) => (
        <div key={item.id}>
          <ProjectCard project={item} />
        </div>
      ))}
      <div className="row pagination-container">
        <Pagination
          pageCount={page ? page.totalPages : 0}
          range={3}
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default Project;
