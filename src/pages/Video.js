import React, { useRef, useState, useEffect } from 'react'
import './Video.css'
import { debounce } from '@mui/material'
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

    useEffect(() => {
        const handleScrollDebounced = debounce(() => {
          if (videoRef.current) {
            videoRef.current.currentTime = 0; // Define o tempo de reprodução para 0 segundos
            videoRef.current.pause(); // Pausa a reprodução do vídeo
          }
        }, 300);
      
        window.addEventListener("keydown", handleScrollDebounced);
        window.addEventListener("wheel", handleScrollDebounced); // Adiciona o ouvinte de evento para o evento "keydown"
        window.addEventListener("touchmove", handleScrollDebounced); // Adiciona o ouvinte de evento para o evento "touchmove"

        return () => {
          window.removeEventListener("keydown", handleScrollDebounced);
          window.addEventListener("wheel", handleScrollDebounced); // Remove o ouvinte de evento quando o componente é desmontado
          window.removeEventListener("touchmove", handleScrollDebounced); // Remove o ouvinte de evento quando o componente é desmontado
        };
      }, []);

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
