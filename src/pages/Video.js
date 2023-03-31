import React, {useRef, useState} from 'react'
import './Video.css'
import VideoFooter from './components/footer/VideoFooter'

function Video() {

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
                src='https://firebasestorage.googleapis.com/v0/b/jornada-b5e9d.appspot.com/o/brecker2.mp4?alt=media&token=9aa979e9-0907-4093-abd5-a71efe4fc946'>
            </video>

                {/* Sidebar */}

                {/* Footer */}
            <VideoFooter />
        </div>
    )
}

export default Video
