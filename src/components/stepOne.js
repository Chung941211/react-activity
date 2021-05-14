import React from 'react';

const StepOne = props => {

    return (
        <div className="defalut-bg">
            <div className="stepOne-bg">
                <img src={require('../images/car.png').default} alt="" />
            </div>
            <a  className="stepOne-link"
                href="https://wx.vzan.com/live/tvchat-100882512?v=1620465354501">
               <img src={require('../images/word.png').default} alt="" />
            </a>
        </div>
    )
}

export default StepOne