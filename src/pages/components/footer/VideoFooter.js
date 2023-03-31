import React from 'react'
import './VideoFooter.css'
import MusicNoteIcon from '@mui/icons-material/MusicNote';

function VideoFooter() {
  return (
    <div className='video_footer'>
        <div className='video_footer_text'>
            <h3>@sevenaria</h3>
            <p> Descrição do video</p>

            <div className='video_footer_music'>
                <MusicNoteIcon className='video_footer_music_icon' />
                <div className='video_footer_music_title'>
                    <p>Hatsune Miku - World is Mine</p>
                </div>

            </div>
        </div>
        <img 
        className='video_footer_record'
        alt='Imagem disco de vinil girando'
        src='https://firebasestorage.googleapis.com/v0/b/repository-of-things.appspot.com/o/tiktok-clone%20files%2Fvinil.png?alt=media&token=653f1649-19b7-4a28-bae0-5d49d833311b'
        />
    </div>
  );
}

export default VideoFooter