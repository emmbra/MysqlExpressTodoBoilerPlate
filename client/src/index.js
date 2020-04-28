import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';

// what do you want to render and where to
ReactDOM.render(<App 
  greeting='Hello'
  name='Emmett' 
  lastName='Brady'
  />, document.getElementById('root'));
