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
                src='https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4'>
            </video>

                {/* Sidebar */}

                {/* Footer */}
            <VideoFooter />
        </div>
    )
}

export default Video
