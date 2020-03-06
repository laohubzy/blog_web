
import React from 'react';
import { renderRoutes } from 'react-router-config';
import { BrowserRouter, Switch } from 'react-router-dom';


import routes from '../router';

import '../style/common.css';
import '../style/reset.css';


export default () => (
  <div className="App">
    <BrowserRouter>
      <Switch>
        {renderRoutes(routes)}
      </Switch>
    </BrowserRouter>
  </div>
);
