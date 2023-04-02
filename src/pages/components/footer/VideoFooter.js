import React from 'react'
import './VideoFooter.css'
import MusicNoteIcon from '@mui/icons-material/MusicNote';

function VideoFooter({user, desc, music}) {
  return (
    <div className='video_footer'>
        <div className='video_footer_text'>
            <h3>{user}</h3>
            <p>{desc}</p>

            <div className='video_footer_music'>
                <MusicNoteIcon className='video_footer_music_icon' />
                <div className='video_footer_music_title'>
                    <p>{music}</p>
                </div>

            </div>
        </div>
        <img 
        className='video_footer_record'
        alt='Imagem disco de vinil girando'
        src='https://firebasestorage.googleapis.com/v0/b/repository-of-things.appspot.com/o/titkok-clone%2Fvinil.png?alt=media&token=d8bd16a6-ec4c-47ae-9e0a-1d04abd47899'
        />
    </div>
  );
}

export default VideoFooter