import React from 'react';
import ExperienceItem from './experienceItem';

const ExperienceList = (props) => {
  const experienceItems = props.jobs.map((job) => {
    return <ExperienceItem
    job = {job}
    key= {job.workplace} />
  });

  return(
    <div id="experience" className="section">
      <h1>Experience</h1>
      <ul className="timeline">
        {experienceItems}
      </ul>
    </div>
  );
}

export default ExperienceList;
