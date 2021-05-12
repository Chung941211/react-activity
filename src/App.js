import React, { Component } from 'react';
import Swiper from "swiper";
import './style/App.css';
import "swiper/swiper.min.css"

import StepOne from './components/stepOne';

export default class Index extends Component {

  componentDidMount() {
    new Swiper('.swiper-container', {
      direction: 'vertical',
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    });
  }

  render() {
    return (
      <div className="swiper-container">
        <div className="swiper-wrapper">

          <div className="swiper-slide">

            <StepOne />

          </div>
          
          <div className="swiper-slide"></div>
          <div className="swiper-slide"></div>
        </div>
        
        <div className="swiper-pagination"></div>
      </div>
    );
  }

}
