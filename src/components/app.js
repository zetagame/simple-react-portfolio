import React, { Component } from 'react';
import portfolioData from '../data/portfolioData.json';
import Header from './header';
import Greeting from './greeting';
import ProjectList from './projectList';
import ExperienceList from './experienceList';
import SkillList from './skillList';
import Contact from './contact';
import '../scripts/fader.js';
import '../scripts/ui.js';
import '../scripts/typist.js';
import '../scripts/circleFill.js';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    projects: portfolioData.projects,
    skills: portfolioData.skills,
    jobs: portfolioData.experience
  };

  render() {
    return (
      <div className="content">
        <Header />
        <Greeting />
        <div className="container">
          <ProjectList projects={this.props.projects}/>
          <hr className="my-4"/>
          <ExperienceList jobs={this.props.jobs} />
          <SkillList skills={this.props.skills} />
          <hr className="my-4"/>
          <Contact id="contact" className="section" />
        </div>
      </div>
    );
  }
}
