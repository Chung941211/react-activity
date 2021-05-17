import React from 'react';

const StepOne = props => {

    return (
        <div className="defalut-bg stepOne-ph">
            <div className="stepOne-bg">
                <img src={require('../images/car.png').default} alt="" />
            </div>
            <div className="stepOne-pbg">
                <img src={require('../images/phone-car.png').default} alt="" />
            </div>
            <a  className="stepOne-link"
                href="https://wx.vzan.com/live/tvchat-100882512?v=1620465354501">
               <img src={require('../images/word.png').default} alt="" />
            </a>
            <div className="stepOne-plink">
              <img  className="stepOne-plink-left" src={require('../images/index-02.png').default} alt="" />
              <a className="stepOne-plink-right" href="https://wx.vzan.com/live/tvchat-100882512?v=1620465354501">
                <img src={require('../images/index-01.png').default} alt="" />
                </a>
            </div>
        </div>
    )
}

export default StepOne