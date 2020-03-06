import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import './navigationBar.scss';
import routes from '@router/index.js';

const NavigationBar = ({ history }) => {
  const [hideBar, setHideBar] = useState(false);
  const [currRoute, setCurrRoute] = useState({});
  const [hideSearch, setHideSearch] = useState(true);
  const [lineStyle, setLineStyle] = useState({});

  const isActive = (item) => {
    if (currRoute.path === item.path) {
      return 'active';
    }
    return '';
  };

  const changeRoute = () => {
    const path = history.location.pathname;
    const item = routes[0].children.find(i => (path === '/' && i.path === '/home') || path === i.path);
    if (item) {
      setHideBar(item.hideBar);
      setCurrRoute(item);
    }
  };

  const setLinePosition = (item, e) => {
    const target = item ? e.target : document.querySelector(`#${currRoute.path}`);
    setLineStyle({
      left: target.offsetLeft,
      width: target.clientWidth,
    });
  };

  const clickBar = (item, e) => {
    console.log(e.target.clientWidth);
    console.log(e.target.offsetTop);
    console.log(e.target.offsetLeft);
    setLinePosition(item, e);
    history.push(item.path);
  };

  useEffect(() => {
    changeRoute();
    // setLinePosition();
    history.listen(() => {
      changeRoute();
    });
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
                  id={i.path}
                  className={`list-item ${isActive(i)}`}
                  onClick={(e) => { clickBar(i, e); }}
                  key={i.path}
                >
                  {i.title}
                </div>
              ))}
              <div className="bar-line" style={lineStyle}/>
            </div>
            <div className="search-icon">
              <i className="iconfont">&#xe60d;</i>
              <div className={`search-input ${hideSearch ? 'input-blur' : 'input-foucs'}`}>
                <input
                  onFocus={() => { setHideSearch(false); }}
                  onBlur={() => { setHideSearch(true); }}
                />
              </div>
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
