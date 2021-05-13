import React,  { useEffect } from 'react';
import Swiper from "swiper"

const StepOne = props => {
    useEffect(() => {
        new Swiper('.image-bg', {
            slidesPerView: 3,
            spaceBetween: 5,
            centeredSlides: true,
            loop: true
        });
    })
    return (
        <div className="defalut-bg">
            <div className="image-wrapper">
                <div className="swiper-container image-bg">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide image-rows"></div>
                        <div className="swiper-slide image-rows"></div>
                        <div className="swiper-slide image-rows"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StepOne