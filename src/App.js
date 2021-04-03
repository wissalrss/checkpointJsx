import logo from './logo.svg';
import './App.css';
import '../src/style.css';
import srcImg from '../src/imageInSrc.jpg'

function App() {
  return (
    <div className="App">
  
      <div className="container">
      <h1 className="title red">Your name here</h1>
      <br />
      <img src={srcImg} />

      <br />

      <img src="/imageInPublic.jpg" />
      
      <br />

      <video width="320" height="240" controls>

       <source src="myVideo.mp4" type="video/mp4" />

         </video>

      </div>

    </div>
  );
}

export default App;
