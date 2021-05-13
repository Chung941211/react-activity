import React from 'react';

const StepOne = props => {
    const { handleNav } = props
    return (
        <div className="nav">
            <div
                onClick={() => handleNav(0)}
                className="nav-title">
                <span>主页</span>
            </div>
            <div className="nav-list">
              <div onClick={() => handleNav(1)} className="nav-word">视频</div>
              <div className="nav-word">产品介绍</div>
              <div className="nav-word">海报</div>
              <div className="nav-word">意向表</div>
            </div>
        </div>
    )
}

export default StepOne