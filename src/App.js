import React, { useEffect, useState } from 'react';
import './App.css';
import Video from './pages/Video.js';
import db from './config/firebase';
import { collection, getDocs } from 'firebase/firestore/lite';

function App() {

  const [videos, setvideos] = useState([])

  async function getVideos() {
    const videoCollection = collection(db, "videos");
    const videoSnapshot = await getDocs(videoCollection);
    const videoList = videoSnapshot.docs.map(doc => doc.data());
    setvideos(videoList);

  }

  useEffect(() => {
    getVideos();
  }, [])

  return (
    <div className="App">
      <div className='app__videos'>

        {videos.map((item) => {
          console.log(videos);
          return (

            <Video
              user={item.user}
              desc={item.desc}
              music={item.music}
              url={item.url}
              likes={item.likes}
              comments={item.comments}
              shares={item.shares}
            />

          );
        })};

      </div>
    </div>
  );
}

export default App;
