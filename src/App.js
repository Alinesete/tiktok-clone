//import logo from './logo.svg';
import './App.css';
import Video from './pages/Video.js'

function App() {

  /* Diferente do professor: Cria um array com as urls*/
  const videoUrls = [

    {
      id: 1,
      desc: 'Perry the platypus',
      user: '@tsukinia_crochet',
      music: 'Running up that hill - Kate Bush',
      url: 'https://firebasestorage.googleapis.com/v0/b/repository-of-things.appspot.com/o/tiktok-clone%20files%2Ftiktok-perry.mp4?alt=media&token=646314af-8199-4c38-8782-0df4b40f68f5',
      likes: 3000,
      comments: 5000,
      shares: 1000,
    },

    {
      id: 2,
      desc: 'Lugares do Brasil que não parecem reais',
      user: '@itsgiyuu',
      music: 'itsgiyuu original',
      url: 'https://firebasestorage.googleapis.com/v0/b/repository-of-things.appspot.com/o/tiktok-clone%20files%2Ftiktok-brasil.mp4?alt=media&token=71f67af5-3e50-40ee-a39d-7a740cd03a01',
      likes: 7804,
      comments: 5264,
      shares: 1327,
    }
  ];

  return (
    <div className="App">
      <div className='app__videos'>

        {/* Diferente do professor: Passa um array com os links como parâmetro e cria uma cópia de Video para cada url*/}
        {videoUrls.map((video) => (
          <Video key={video.id} user={video.user} desc={video.desc} music={video.music} url={video.url} likes={video.likes} comments={video.comments} shares={video.shares} />
        ))}

      </div>
    </div>
  );
}

export default App;
