import './App.css';
import sizzle from './assets/sizzle.mp4'
import React,{useState} from 'react'
import ReactDOM from 'react-dom'
import ModalVideo from 'react-modal-video'
import './modal-video.css'

function App() {

  const [isOpen, setOpen] = useState(false)

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
          <h3>ENTER</h3>
        </div>
      </div>

      <div className='work-container'>
        work
      </div>

      <div className='footer-container'>
      <React.Fragment>
      <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} />

      <button className="btn-primary" onClick={()=> setOpen(true)}>VIEW DEMO</button>
      </React.Fragment>
      </div>

    </div>
  );
}

export default App;
