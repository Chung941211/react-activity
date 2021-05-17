import React, { useState, useRef, useEffect } from 'react';
import video01 from '../video/video01.mp4'
import video02 from '../video/video02.mp4'
import video03 from '../video/video03.mp4'
import video04 from '../video/video04.mp4'

const StepOne = props => {

    const [play, setPlay] = useState(false)
    const [num, setNum] = useState(1)
    const [video, setVideo] = useState(video01)
    const videoEl = useRef(null);

    function handlePlay() {
        setPlay(true)
        videoEl.current.play()
    }

    useEffect(() => {
        // setPlay(true)
        // videoEl.current.play()
        videoEl.current.addEventListener('ended', () => {
            const count = num + 1
            setNum(count)
            if (count === 2) {
                setVideo(video02)
                videoEl.current.play()
            }
            if (count === 3) {
                setVideo(video03)
                videoEl.current.play()
            }
            if (count === 4) {
                setVideo(video04)
                videoEl.current.play()
                setNum(1)
            }
        })
    }, [num])
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
                        ended="onEnd"
                        style={{display: play}}
                        ref={videoEl}
                        src={video}
                        controls="controls">
                    </video>
            </div>
        </div>
    )
}

export default StepOne