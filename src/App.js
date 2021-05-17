import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";

import './style/App.css';
import './style/phone.css';
import "swiper/swiper.min.css"

import StepOne from './components/stepOne';
import StepTwo from './components/stepTwo';
import StepImage from './components/stepImage';
import StepFrom from './components/stepFrom';
import StepDetail from './components/stepDetail';
import Agreement from './components/agreement';

function Index() {

  const [nav, setCount] = useState(0)
  const [width, setWidth] = useState(document.body.clientWidth)

  const handleNav = (nav) => {
    setCount(nav)
    document.documentElement.scrollTop = 0
  }

  return (
    <div className={`container`}>

      { 
        width > 750 ? 

        <div className="swiper-wrapper">
          { nav === 0 && <StepOne /> }
          
          { nav === 1 && <StepTwo /> }

          { nav === 2 && <StepDetail /> }

          { nav === 3 && <StepImage /> }

          { nav === 4 && <StepFrom /> }

        </div>

        : 

        <div className="phone-wrapper">
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