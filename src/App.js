import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";

import './style/App.css';
import "swiper/swiper.min.css"

import Nav from './components/nav';
import StepOne from './components/stepOne';
import StepTwo from './components/stepTwo';
import StepImage from './components/stepImage';
import StepFrom from './components/stepFrom';
import StepDetail from './components/stepDetail';
import Agreement from './components/agreement';

function Index() {

  const [nav, setCount] = useState(0)

  const handleNav = (nav) => {
    setCount(nav)
    document.documentElement.scrollTop = 0
  }

  return (
    <div className={`container from`}>
      <div className="swiper-wrapper">
        { nav }
        { nav === 0 && <StepOne /> }
        
        { nav === 1 && <StepTwo /> }

        { nav === 2 && <StepDetail /> }

        { nav === 3 && <StepImage /> }

        { nav === 4 && <StepFrom /> }

      </div>
      
      <Nav handleNav={handleNav} nav={nav} />
      
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