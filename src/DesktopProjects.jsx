import React from 'react'
import './App.css'
import {projects} from './Projects'

export default function DesktopProjects({setVideoId,setOpen}) {
    function openPlayer(video_id){
        setVideoId(video_id)
        if(video_id){
            setOpen(true)
        }
    }
    return (
        <div>
            {projects.map((video)=>{
                return(
                <div key={video.video_id} className='thumb-video-container'>
                    
                    <div className='thumb-gallery-photo'>
                        <img src={require('./assets/'+video.gallery_one)} alt='music video gallery one'></img>
                    </div>

                    <div className='thumb-gallery-video' onClick={()=>openPlayer(video.video_id)}>
                        <img src={require('./assets/'+video.image)} alt='music video thumbnail'></img>
                        <div className='thumb-video-text'>
                            <p id='artist'>{video.artist}</p>
                            <p id='song-title'>"{video.title}"</p>
                        </div>
                    </div>

                    <div className='thumb-gallery-photo'>
                        <img src={require('./assets/'+video.gallery_two)} alt='music video gallery two'></img>
                    </div>

                </div>
                )
            })}
        </div>
    )
}
