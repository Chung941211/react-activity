import React,  { useEffect, useState } from 'react';
import Swiper from "swiper"
import '../style/swiper.css'

const StepOne = props => {
    const [obj, setObj] = useState(null)
    useEffect(() => {
        let clientWidth = document.body.clientWidth
        let swiper = new Swiper('.image-bg', {
            slidesPerView: clientWidth < 750 ? 1 : 3,
            spaceBetween: clientWidth < 750 ? 0 : 15,
            loop: true,
            centeredSlides: true
        });
        setObj(swiper)
    }, [])

    function handlePrev() {
      obj.slidePrev()
    }
    function handleNext() {
      obj.slideNext();
    }
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
            <div className="swiper-flex">
              <div
                onClick={() => handlePrev()}
                className="swiper-button-prev"></div>
              <div
                onClick={() => handleNext()}
                className="swiper-button-next"></div>
            </div>
        </div>
    )
}

export default StepOne