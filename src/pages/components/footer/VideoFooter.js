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
        src=' https://firebasestorage.googleapis.com/v0/b/jornada-dev.appspot.com/o/vinil.png?alt=media&token=d174bbec-b930-41e4-ab50-af1ea81bb7da'
        />
    </div>
  );
}

export default VideoFooter