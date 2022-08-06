import './App.css';
import sizzle from './assets/sizzle.mp4'
import React,{useEffect,useState} from 'react'
import ModalVideo from 'react-modal-video'
import './modal-video.css'
import { Icon } from '@iconify/react';
import MobileProjects from './MobileProjects';
import DesktopProjects from './DesktopProjects';
import MobileVideo from './MobileVideo';

function App() {

  const [isOpen, setOpen] = useState(false)
  const [videoId, setVideoId] = useState(" ")
  const [deskMode, setDeskMode] = useState((window.innerWidth>=950) ? true : false);
  const [loading, setLoading] = useState(true)

  function scrollDown(){
    var projects = document.getElementById("projects")
    projects.scrollIntoView({behavior:'smooth'})
  }

  useEffect(()=>{
    function renderFeed(){
        window.innerWidth>=950 ? setDeskMode(true) : setDeskMode(false)
    }
    window.addEventListener('resize',renderFeed)
  })

  return (
    <div className="app-container">

      <div className='video-container'>

        {deskMode?
          <video className='videoTag' autoPlay loop muted>
            <source src={sizzle} type='video/mp4' />
          </video>:
          <MobileVideo/>
        }      

        <div className='video-text'>
          <h1>YAYO VANG</h1>
          <h4>DIRECTOR OF PHOTOGRAPHY</h4>
          <h3 onClick={()=>scrollDown()}> 
            SEE MORE
          </h3>

        </div>

      </div>


      <div className='projects-container' id='projects'>
        <h1>WORK</h1>

        <div className='thumb-container'>


          {deskMode?<DesktopProjects setVideoId={setVideoId} setOpen={setOpen} loading={loading} setLoading={setLoading}/>:<MobileProjects setVideoId={setVideoId} setOpen={setOpen} loading={loading} setLoading={setLoading}/>}
          
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
          <a href='mailto:contact@yayovang.com'>
            <Icon icon="fontisto:email" className='contact-icon'/>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
