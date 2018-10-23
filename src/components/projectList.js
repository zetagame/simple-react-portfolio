import React from 'react';
import ProjectItem from './projectItem';

const ProjectList = (props) => {
  const projectItems = props.projects.map((project) => {
    return <ProjectItem
    {...project}
    key= {project.title} />
  });

  return(
    <div id="projects"  className="section">
      <h1>Projects</h1>
      <div className= "row">
        <div className="card-group">
          {projectItems}
        </div>
      </div>
    </div>
  );
}

export default ProjectList;
