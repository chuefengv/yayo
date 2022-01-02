import './App.css';
import sizzle from './assets/sizzle.mp4'

function App() {
  return (
    <div className="app-container">

      <div className='video-container'>
        <video className='videoTag' autoPlay loop muted>
            <source src={sizzle} type='video/mp4' />
        </video>
        <div className='video-transparent-layer'></div>
        <div className='video-text'>
          <h1>YAYO VANG</h1>
          <h4>DIRECTER OF PHOTOGRAPHY</h4>
          <h3>ENTER HERE</h3>
        </div>
      </div>

      <div className='work-container'>
        Work
      </div>

      <div className='footer-container'>
        Footer
      </div>

    </div>
  );
}

export default App;
