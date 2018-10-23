import React, {Component} from 'react';

import typist from '../scripts/typist.js';

class Greeting extends Component{
  constructor(props) {
    super(props);
    this.particlesRef = React.createRef();
  }
  componentDidMount(){
    const particles = document.createElement('script');
    const landingPageText = [
      'modular.',
      'lightning fast.',
      'meticulously designed.',
      'made by Zachary Haigh.'

    ];

    particles.type = 'text/babel';
    particles.src = require('../scripts/particles.js');
    this.particlesRef.current.appendChild(particles);
    typist(landingPageText, 'dynamicMessage');
  }
  render() {
    return(
      <div id='greeting'>
      <div className='greeting-message'>
        <span className='message-start'>Your front end should be </span>
        <span id="dynamicMessage"></span>
        <span className="blinking-cursor">|</span>
      </div>
      <div id="particles-js" ref={this.particlesRef}></div>
      </div>
    )
}
}

export default Greeting;
