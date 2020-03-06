
import React from 'react';
import { renderRoutes } from 'react-router-config';
import { BrowserRouter, Switch } from 'react-router-dom';


import routes from '@router';


import '@style/index.scss';


export default () => (
  <div className="App">
    <BrowserRouter>
      <Switch>
        {renderRoutes(routes)}
      </Switch>
    </BrowserRouter>
  </div>
);
