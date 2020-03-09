import React from 'react';
import PersonalCard from './components/PersonalCard';
import './style/home.scss';

const Home = () => {
  console.log('x');
  return (
    <div className="home-wrapper">
      <div className="head">
        <div className="name">老虎不长牙</div>
        <div className="verse">川江谁能一小时</div>
        <i className="iconfont more">&#xe646;</i>
      </div>
      <div className="content flex-start-between">
        <PersonalCard />
      </div>
    </div>
  );
};

export default Home;
