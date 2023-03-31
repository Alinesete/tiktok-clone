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
                src='https://firebasestorage.googleapis.com/v0/b/repository-of-things.appspot.com/o/tiktok-clone%20files%2Ftiktok-brasil.mp4?alt=media&token=71f67af5-3e50-40ee-a39d-7a740cd03a01'>
            </video>

                {/* Sidebar */}

                {/* Footer */}
            <VideoFooter />
        </div>
    )
}

export default Video
