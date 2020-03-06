import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import './navigationBar.scss';
import routes from '@router/index.js';

const NavigationBar = ({ history }) => {
  const [hideBar, setHideBar] = useState(false);
  const [currRoute, setCurrRoute] = useState({});



  const isActive = (item) => {
    if (currRoute.path === item.path) {
      return 'active';
    }
    return '';
  };

  const changeRoute = (item) => {
    // const path = history.location.pathname;
    console.log(item);
    setHideBar(item.hideBar);
    setCurrRoute(item);
    history.push(item.path);
  };

  useEffect(() => {
    const path = history.location.pathname;
    const item = routes[0].children.find(i => (path === '/' && i.path === '/home') || path === i.path);
    if (item) {
      setHideBar(item.hideBar);
      setCurrRoute(item);
    }
  }, []);

  return (
    <div>
      {hideBar ? <div />
        : (
          <div className="navigation-bar flex-all-center">
            <div className="logo">虎牙</div>
            <div className="bar-item-list flex-center">
              { routes[0].children.map((i) => (
                <div
                  onClick={() => changeRoute(i)}
                  className={`list-item ${isActive(i)}`}
                  key={i.path}
                >
                  {i.title}
                </div>
              ))}
            </div>
          </div>
        )}
    </div>
  );
};

NavigationBar.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired,
};

export default withRouter(NavigationBar);
