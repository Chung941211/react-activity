import React, { useState } from 'react';
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

    // let match = useRouteMatch();
    console.log(useRouteMatch())
  const [nav, setCount] = useState(0)

  const handleNav = (nav) => {
    setCount(nav)
  }

  return (
    <div className={`container ${nav === 4 ? 'from' : ''}`}>
      <div className="swiper-wrapper">
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