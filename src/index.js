import React from 'react';
import ReactDOM from 'react-dom';
import App from '@pages/App';

const path = require('path');


ReactDOM.render(
  <App />,
  document.getElementById('root'),
);

console.log(path.resolve('src/pages'));
console.log(path.resolve(__dirname, 'src/pages'));
console.log(__dirname);
