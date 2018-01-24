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
      <div className="row">
        <a className="btn btn-default download-button" href="http://zackhaighdesign.com/my_files/resumezh2018.pdf">Printer Friendly Version</a>
      </div>
    </div>
  );
}

export default SkillList;
