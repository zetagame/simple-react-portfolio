import React from 'react'; 

const ProjectItem = (props) => {
  debugger;
  const { url, title, description, fadeInClass, img } = props;
  const renderImage = require(`../img/${img}`);
  return (
    <div className={"card fade-in leading " + fadeInClass}>
      <a href={url}>
        <div className='card-img-wrapper'>
          <img className="card-img-top" src={renderImage} alt="" />
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
