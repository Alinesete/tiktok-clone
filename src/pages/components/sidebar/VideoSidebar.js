import React, {useState} from 'react'
import './VideoSidebar.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';

function VideoSidebar({likes, comments, shares}) {

    const [liked, setLiked] = useState(false)
    
    function handleLike(){
        setLiked(!liked)
    }

  return (
    <div className='video_sidebar'>

        <div className='video_sidebar_options' onClick={handleLike}>
            { liked ? 
            <FavoriteIcon fontSize='large'/> : 
            <FavoriteBorderIcon fontSize='large'/> }
            <p>{liked ? likes + 1 : likes}</p>
        </div>

        <div className='video_sidebar_options'>
            <CommentIcon fontSize='large'/>
            <p>{comments}</p>
        </div>

        <div className='video_sidebar_options'>
            <ShareIcon fontSize='large'/>
            <p>{shares}</p>
        </div>

    </div>
  )
}

export default VideoSidebar