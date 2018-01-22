import React from 'react';

const ExperienceItem = ({job}) => {
  const workplace = job.workplace;
  const year = job.year;
  const position = job.position;
  const responsibilities = job.responsibilities;
  return (
    <li className="fade-in fade-in-center leading leading-sm">
      <div className="time">
        <span>{year}</span>
      </div>
      <div className="icon icon-phone"></div>
      <div className="label">
        <h4>{workplace}</h4>
        <p>{responsibilities}</p>
        </div>
    </li>
  )
};

export default ExperienceItem;
