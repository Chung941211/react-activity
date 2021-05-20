import React, { useState, useRef, useEffect } from 'react';
const StepOne = props => {

    const [play, setPlay] = useState(false)
    const [num, setNum] = useState(1)
    const videoEl = useRef(null);

    function handlePlay() {
        setPlay(true)
        videoEl.current.play()
    }

    useEffect(() => {
        // setPlay(true)
        // videoEl.current.play()
        // videoEl.current.addEventListener('ended', () => {
        //     const count = num + 1
        //     setNum(count)
        //     if (count === 2) {
        //         setVideo(video02)
        //         videoEl.current.play()
        //     }
        //     if (count === 3) {
        //         setVideo(video03)
        //         videoEl.current.play()
        //     }
        //     if (count === 4) {
        //         setVideo(video04)
        //         videoEl.current.play()
        //         setNum(1)
        //     }
        // })
    }, [])
    return (
        <div className="defalut-bg">
            { num }
            <div className="video-bg">
                { play ? 
                    <img
                        className="video-play"
                        src={require('../images/play2.png').default} alt="" />
                    :
                    <img
                    onClick={() => handlePlay()}
                    className="video-play"
                    src={require('../images/play.png').default} alt="" />
                }
                    <video
                        className={`video-content ${play ? 'block' : ''}`}
                        style={{display: play}}
                        ref={videoEl}
                        src='http://i-cab.sany.com.cn/%E5%8F%91%E5%B8%83%E4%BC%9A%E5%AE%A3%E4%BC%A0%E7%89%870518.mp4'
                        controls="controls">
                    </video>
            </div>
        </div>
    )
}

export default StepOne