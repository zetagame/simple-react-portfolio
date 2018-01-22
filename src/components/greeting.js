import React, {Component} from 'react';

class Greeting extends Component{
  componentDidMount(){
    const particles = document.createElement('script');
    particles.type = 'text/javascript';
    particles.src = '/src/scripts/particles.js';
    this.instance.appendChild(particles);
    const landingPageText = [
      'modular.',
      'lightning fast.',
      'meticulously designed.',
      'made by Zachary Haigh.'

    ]
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
      <div id="particles-js" ref={el => (this.instance = el)}></div>
      </div>
    )
}
}

export default Greeting;
