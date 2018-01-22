import React from 'react';

const ProjectItem = ({project}) => {
  const title = project.title;
  const url = project.url;
  const img = project.img;
  const description = project.description;
  const fadeInClass = project.fadeInClass;
  return (
    <div className={"card fade-in leading " + fadeInClass}>
      <a href={url}>
        <div className='card-img-wrapper'>
          <img className="card-img-top" src={img} alt="" />
        </div>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text project-description">{description}</p>
        </div>
      </a>
  </div>
  )
};

export default ProjectItem;
