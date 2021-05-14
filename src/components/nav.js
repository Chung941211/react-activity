import React from 'react';

const StepOne = props => {
    const { handleNav, nav } = props
    return (
        <div>
            <div className="nav">
                <div
                    onClick={() => handleNav(0)}
                    className="nav-title">
                    <span>主页</span>
                </div>
                <div className="nav-list">
                    <div onClick={() => handleNav(1)} className={`nav-word ${nav === 1 ? 'active' : ''}`}>
                        <span>视频</span>
                    </div>
                    <div onClick={() => handleNav(2)} className={`nav-word ${nav === 2 ? 'active' : ''}`}>
                        <span>产品介绍</span>
                    </div>
                    <div onClick={() => handleNav(3)} className={`nav-word ${nav === 3 ? 'active' : ''}`}>
                        <span>海报</span>
                    </div>
                    <div onClick={() => handleNav(4)} className={`nav-word ${nav === 4 ? 'active' : ''}`}>
                        <span>意向表</span>
                    </div>
                </div>
                <img
                    className="nav-back"
                    src={require('../images/back.png').default} alt="" />
            </div>
            <div className="phone-nav">
                <div onClick={() => handleNav(0)} className={`phone-word ${nav === 0 ? 'phone-active' : ''}`}>主页</div>
                <div onClick={() => handleNav(1)} className={`phone-word ${nav === 1 ? 'phone-active' : ''}`}>视频</div>
                <div onClick={() => handleNav(2)} className={`phone-word ${nav === 2 ? 'phone-active' : ''}`}>产品介绍</div>
                <div onClick={() => handleNav(3)} className={`phone-word ${nav === 3 ? 'phone-active' : ''}`}>海报</div>
                <div onClick={() => handleNav(4)} className={`phone-word ${nav === 4 ? 'phone-active' : ''}`}>意向表</div>
            </div>
        </div>
    )
}

export default StepOne