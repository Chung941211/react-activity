import React, { useEffect } from 'react';
import Swiper from "swiper"
const StepDetail = props => {

    useEffect(() => {
        new Swiper('.stepDetail-pbg', {
            direction: 'vertical',
            roundLengths : true, 
            slidesPerView: 'auto',
            freeMode: true,
            scrollbar: {
                el: '.swiper-scrollbar',
            },
            mousewheel: true
        });
    })
    return (
        <div className="stepDetail">
            <img
                className="stepDetail-bg"
                src={require('../images/bg.jpg').default} alt="" />
            <div className="swiper-container stepDetail-pbg">
                <div className="swiper-wrapper">
                    <div className="swiper-slide ">
                    <img
                        className="stepDetail-pbg-img"
                        src={require('../images/pbg.jpg').default} alt="" />
                    </div>
                </div>
                <div className="swiper-scrollbar"></div>
            </div>
        </div>
    )
}

export default StepDetail