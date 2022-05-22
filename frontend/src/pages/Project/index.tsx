import Pagination from "components/Pagination";
import ProjectCard from "components/ProjectCard";
import { useState } from "react";
type ControlComponentsData = {
  activePage: number;
};
const Project = () => {
  const [controlComponentsData, setControlComponentsData] =
    useState<ControlComponentsData>({
      activePage: 0,
    });
  const handlePageChange = (pageNumber: number) => {
    setControlComponentsData({
      activePage: pageNumber,
    });
  };
  return (
    <div id="projects">
      <ProjectCard
        title="DEPLOY"
        text=" Primeiro desafio do Bootcamp da Digital Innovation One.
        O desafio consiste em criar um repositório no GitHub com as 
        informações sobre o conteúdo dos cursos que estão sendo realizados.
        Criei um 'mini-portfólio' utilizando SpringBoot e ReactJS.
        Para mais informações acesse o link do repositório"
        note="https://dio-git-challenge.netlify.app/"
        name="GitHub"
        link="https://github.com/DiegoVP66/DIO-GIT-CHALLENGE"
      />
      <div className="row pagination-container">
        <Pagination pageCount={3} range={3} onChange={handlePageChange} />
      </div>
    </div>
  );
};

export default Project;
