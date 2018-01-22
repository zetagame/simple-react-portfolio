import React from 'react';
import SkillItem from './skillItem';

const SkillList = (props) => {
  const skillItems = props.skills.map((skill) => {
    return <SkillItem
    skill = {skill}
    key= {skill.title} />
  });

  return(
    <div id="skills"  className="">
    <h1 className="text-center">Skills</h1>
      <div className= "row skill-list">
        {skillItems}
      </div>
    </div>
  );
}

export default SkillList;
