import React, { useRef, useState } from 'react'
import './Video.css'
import VideoFooter from './components/footer/VideoFooter'
import VideoSidebar from './components/sidebar/VideoSidebar'

function Video({user, desc, music, url, likes, comments, shares}) {

    const videoRef = useRef(null)
    const [play, setPlay] = useState(false)

    function handleStart() {

        if (play) {
            videoRef.current.pause()
            setPlay(false)
        } else {
            videoRef.current.play()
            setPlay(true)
        }

    }

    return (
        <div className='video'>
            <video className='video_player'
                ref={videoRef}
                onClick={handleStart}
                loop
                src={url}>
            </video>

            {/* Sidebar */}
            <VideoSidebar likes={likes} comments={comments} shares={shares}/>
            {/* Footer */}
            <VideoFooter user={user} desc={desc} music={music}/>

        </div>
    )
}

export default Video
