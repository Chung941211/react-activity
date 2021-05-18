import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './style/App.css';
import './style/phone.css';
import "swiper/swiper.min.css"
import Swiper from "swiper"
import StepTwo from './components/stepTwo';
import StepImage from './components/stepImage';
import StepFrom from './components/stepFrom';
import Agreement from './components/agreement';

function Index() {

  const [nav, setCount] = useState(0)
  const [width, setWidth] = useState(document.body.clientWidth)

  useEffect(() => {
      new Swiper('.swiper-index', {
        direction: 'vertical',
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
  
  }, [])

  const handleNav = (nav) => {
    setCount(nav)
    document.documentElement.scrollTop = 0
  }

  return (
    <div className={`container`}>

      { 
        width > 750 ? 
        <div className="swiper-container swiper-index">
          <div className="swiper-wrapper">

            <div className="swiper-slide">
              <img
                className="mac-bg"
                src={require('./images/index/bg01.png').default} alt="" />
            </div>
            <div className="swiper-slide">
              <img
                className="mac-bg"
                src={require('./images/index/bg02.png').default} alt="" />
            </div>
            <div className="swiper-slide">
              <img
                className="mac-bg"
                src={require('./images/index/bg03.png').default} alt="" />
            </div>
            <div className="swiper-slide">
              <img
                className="mac-bg"
                src={require('./images/index/bg04.png').default} alt="" />
            </div>
            <div className="swiper-slide">
              <img
                className="mac-bg"
                src={require('./images/index/bg05.png').default} alt="" />
            </div>

            {/* { nav === 0 && <StepOne /> }
            
            { nav === 1 && <StepTwo /> }

            { nav === 2 && <StepDetail /> }

            { nav === 3 && <StepImage /> }

            { nav === 4 && <StepFrom /> } */}

          </div>
        </div>

        : 

        <div className="phone-wrapper">
          <a  className="phone-live"
              href="https://wx.vzan.com/live/tvchat-100882512?v=1620465354501">
              <img src={require('./images/pimg/live.png').default} alt="" />
          </a>
          <img
              className="phone-bg"
              src={require('./images/pimg/p01.jpg').default} alt="" />
          <StepTwo />
          <img
              className="phone-bg"
              src={require('./images/pimg/p02.jpg').default} alt="" />
          <StepImage />
          <StepFrom />
          <img
              className="phone-bg"
              src={require('./images/pimg/pbottom.jpg').default} alt="" />
        </div>
      }
      
      
    </div>
  );


}

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Index />
        </Route>
        <Route path="/agreement">
          <Agreement />
        </Route>
      </Switch>
    </Router>
  )
}