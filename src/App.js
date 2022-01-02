import './App.css';
import sizzle from './assets/sizzle.mp4'
import React,{useState} from 'react'
import ModalVideo from 'react-modal-video'
import './modal-video.css'
import {projects} from './Projects'

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

      <div className='projects-container'>
        WORK

        <div className='thumb-container'>
          {projects.map((video)=>{
            return(
              <div key={video.video_id}>
                <img src={video.thumbnail} alt=''></img>
                {video.video_id}
              </div>
            )
          })}
          {/* <button className="btn-primary" onClick={()=> setOpen(true)}>VIEW DEMO</button>
          <ModalVideo channel='youtube' autoplay={true} isOpen={isOpen} videoId="_RexlsEsic4" onClose={() => setOpen(false)} /> */}
        </div>
      </div>

      <div className='footer-container'>
        footers
      </div>
    </div>
  );
}

export default App;
