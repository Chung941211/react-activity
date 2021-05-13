import React, { useState } from 'react';
import Swiper from "swiper";
import './style/App.css';
import "swiper/swiper.min.css"

import Nav from './components/nav';
import StepOne from './components/stepOne';
import StepTwo from './components/stepTwo';

export default function Index() {

  const [nav, setCount] = useState(0)

  const handleNav = (nav) => {
    setCount(nav)
  }
  return (
    <div className="swiper-container">
      <div className="swiper-wrapper">
        {

          nav === 0 &&
          <div className="swiper-slide">

            <StepOne />

          </div>
        }
        
        {

          nav === 1 &&
          <div className="swiper-slide">

            <StepTwo />

          </div>
        }

        {

          nav === 2 &&
          <div className="swiper-slide">

            <StepOne />

          </div>
        }


      </div>
      
      <Nav handleNav={handleNav} />
      
    </div>
  );


}
