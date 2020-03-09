
import React from 'react';
import NavigationBar from '@components/navigationBar/NavigationBar';
import { Switch, Route } from 'react-router-dom';
import './basicLayout.scss';
import Home from '@pages/home/Home';
import Articel from '@pages/article/Article';
import About from '@pages/about/About';
import Time from '@pages/time/Time';

const BasicLayout = () => (
  <div className="basic-layout">
    <div className="background" />
    <NavigationBar />
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/home" component={Home} />
      <Route path="/articel" component={Articel} />
      <Route path="/about" component={About} />
      <Route path="/time" component={Time} />
    </Switch>
  </div>
);

export default BasicLayout;
