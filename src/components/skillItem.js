import React from 'react';

const SkillItem = ({skill}) => {
  const title = skill.title;
  const level = skill.level;
  const totalCircles = 5;
  const unfilledCircles = totalCircles - level;
  let circles = [];
  for (var i=0; i < level; i++) {
    circles.push(<span className="skill-circle filled" key={i}></span>);
  }
  for (var i=0; i < unfilledCircles; i++) {
    circles.push(<span className="skill-circle" key={i + 50}></span>);
  }
  return (
    <div className="col-6 col-md-4 col-lg-4 skill-column">
      <span className="title">{title}</span> {circles}
    </div>
  )
};

export default SkillItem;
