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
                        src='http://ugcbsy.qq.com/uwMROfz2r57BIaQXGdGnCmdXDmZsQ6ukLqkLcgdmmj-KhNxY/gzc_1000035_0b53quaiyaaakaadjpvevrqjlbodrscqbdca.f204110.mp4?sdtfrom=v3010&guid=60e5df1510b065593b346342308adee7&vkey=3792C54FEE199B71D783A9E23495E07497706DA31C932A6BA56D179134B164AB12B8FD54D45A5B9A79DAFABDB984FF58E519F8DD86205CE1452C3FD9551DD56890D26001DA9782B65F9D66B55BD8C69EE6B73704CEAA7F0B94E46C81068FFD24666EAC45C8140B37AF0C26F7E3E0844BAAFD43F812F55203BABB94B9099E2117&platform=2'
                        controls="controls">
                    </video>
            </div>
        </div>
    )
}

export default StepOne