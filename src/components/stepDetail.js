import React from 'react';

const StepDetail = props => {

    return (
        <div className="stepDetail">
            <img
                className="stepDetail-bg"
                src={require('../images/bg.png').default} alt="" />
            <img
                className="stepDetail-pbg"
                src={require('../images/pbg.jpg').default} alt="" />
        </div>
    )
}

export default StepDetail