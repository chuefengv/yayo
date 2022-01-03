import './App.css';
import sizzle from './assets/sizzle.mp4'
import React,{useEffect,useState} from 'react'
import ModalVideo from 'react-modal-video'
import './modal-video.css'
import {projects} from './Projects'
import { Icon } from '@iconify/react';

function App() {

  const [isOpen, setOpen] = useState(false)
  const [videoId, setVideoId] = useState(" ")
  const [deskMode, setDeskMode] = useState((window.innerWidth>=800) ? true : false);

  function openPlayer(video_id){
    setVideoId(video_id)
    if(video_id){
      setOpen(true)
    }
  }

  useEffect(()=>{
    function renderFeed(){
        window.innerWidth>=900 ? setDeskMode(true) : setDeskMode(false)
    }
    window.addEventListener('resize',renderFeed)
  })

  return (
    <div className="app-container">

      <div className='video-container'>
        {/* <video className='videoTag' autoPlay loop muted>
            <source src={sizzle} type='video/mp4' />
        </video> */}
        <div className='video-transparent-layer'></div>
        <div className='video-text'>
          <h1>YAYO VANG</h1>
          <h4>DIRECTER OF PHOTOGRAPHY</h4>
          <h3> 
            <a href='#projects'>SEE MORE</a>
          </h3>
          {deskMode ? <div>hello</div> : <div>yo</div>}
        </div>
      </div>

      <div className='projects-container' id='projects'>
        <h1>WORK</h1>

        <div className='thumb-container'>
          {projects.map((video)=>{
            return(
              <div key={video.video_id} className='thumb-video-container' onClick={()=>openPlayer(video.video_id)}>
                <img src={require('./assets/'+video.image)} alt='music video thumbnail'></img>
                <div className='thumb-video-transparent'></div>
                <div className='thumb-video-text'>
                  <p id='artist'>{video.artist}</p>
                  <p id='song-title'>"{video.title}"</p>
                </div>
              </div>
            )
          })}
          <ModalVideo channel={videoId==="_RexlsEsic4" ? "youtube" : "vimeo"} autoplay isOpen={isOpen} videoId={videoId} onClose={()=>setOpen(false)} />
        </div>
      </div>

      <div className='footer-container'>
        <h4>REACH OUT</h4>
        <p>YAYO VANG</p>
        <p>NEW YORK, NEW YORK</p>
        <div className='footer-contacts'>
          <a href='https://www.instagram.com/yayovang/'>
            <Icon icon="akar-icons:instagram-fill" className='contact-icon'/>
          </a>
          <a href='mailto:yayo.vang@gmail.com'>
            <Icon icon="fontisto:email" className='contact-icon'/>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
