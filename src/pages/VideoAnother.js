import React, {useRef, useState} from 'react'
import './Video.css'
import VideoFooter from './components/footer/VideoFooter'

function VideoAnother() {

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
                src='https://firebasestorage.googleapis.com/v0/b/repository-of-things.appspot.com/o/tiktok-clone%20files%2Ftiktok-perry.mp4?alt=media&token=646314af-8199-4c38-8782-0df4b40f68f5'>
            </video>

                {/* Sidebar */}

                {/* Footer */}
            <VideoFooter />
        </div>
    )
}

export default VideoAnother
