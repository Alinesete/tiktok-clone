//import logo from './logo.svg';
import './App.css';
import Video from './pages/Video.js'
import VideoAnother from './pages/VideoAnother';

function App() {
  return (
    <div className="App">
          <div className='app__videos'>
            <Video />
            <VideoAnother />
            <Video />
            <VideoAnother />
          </div>
    </div>
  );
}

export default App;
