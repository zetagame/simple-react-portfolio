import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { register } from './registerServiceWorker';

import "./font-awesome/scss/font-awesome.scss"

require('popper.js');
require('bootstrap');
require('bootstrap/dist/css/bootstrap.css');
require('./style.css')

ReactDOM.render(<App />, document.querySelector('#root'));
register({});