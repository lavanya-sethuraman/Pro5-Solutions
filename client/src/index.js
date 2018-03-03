import React from 'react';
import ReactDOM from 'react-dom';
//import {Provider} from 'react-redux';
//import store from './store';
import ProjectApp from './projectApp.js';
import './index.css';


ReactDOM.render(
//   <Provider store={store}>
  <ProjectApp />,
  //</Provider>,
  document.getElementById('root')
);
