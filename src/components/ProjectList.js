import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        { projects.map(function(x){
          return <ProjectItem key ={projects.id} project ={x} id ={x.id} name ={x.name} about ={x.about} technologies ={x.technologies}/>
        }
        )}
      </div>
    </div>
  );
}

export default ProjectList;
