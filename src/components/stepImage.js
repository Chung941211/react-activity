import React,  { useEffect } from 'react';
import Swiper from "swiper"

const StepOne = props => {
    useEffect(() => {
        new Swiper('.image-bg', {
            slidesPerView: 3,
            spaceBetween: 15,
            loop: true,
            centeredSlides: true
        });
    })
    return (
        <div className="defalut-bg">
            <div className="image-wrapper">
                <div className="swiper-container image-bg">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide image-rows">
                          <div><img src={require('../images/image01.jpg').default} alt="" /></div>
                        </div>
                        <div className="swiper-slide image-rows">
                          <div><img src={require('../images/image02.jpg').default} alt="" /></div>
                        </div>
                        <div className="swiper-slide image-rows">
                          <div><img src={require('../images/image03.jpg').default} alt="" /></div>
                        </div>
                        <div className="swiper-slide image-rows">
                          <div><img src={require('../images/image04.jpg').default} alt="" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StepOne