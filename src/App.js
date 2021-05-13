import React, { useState } from 'react';
import Swiper from "swiper";
import './style/App.css';
import "swiper/swiper.min.css"

import Nav from './components/nav';
import StepOne from './components/stepOne';
import StepTwo from './components/stepTwo';
import StepImage from './components/stepImage';
import StepFrom from './components/stepFrom';
import StepDetail from './components/stepDetail';

export default function Index() {

  const [nav, setCount] = useState(0)

  const handleNav = (nav) => {
    setCount(nav)
  }
  return (
    <div className="container">
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
