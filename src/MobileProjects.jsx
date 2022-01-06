import React from 'react'
import './App.css'
import {projects} from './Projects'
import LazyLoad from 'react-lazyload';

export default function MobileProjects({setVideoId,setOpen}) {
    function openPlayer(video_id){
        setVideoId(video_id)
        if(video_id){
            setOpen(true)
        }
    }
    return (
        <div>
          <LazyLoad>
            {projects.map((video)=>{
              return(
                <div key={video.video_id} className='thumb-video-container' onClick={()=>openPlayer(video.video_id)}>
                      <div className='thumb-gallery-video'>
                          <img src={video.image} alt='music video thumbnail' ></img>
                          <div className='thumb-video-text'>
                              <p id='artist'>{video.artist}</p>
                              <p id='song-title'>"{video.title}"</p>
                          </div>
                      </div>
                </div>
              )
            })}
          </LazyLoad>
        </div>
    )
}
