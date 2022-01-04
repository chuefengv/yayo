import React from 'react'
import './App.css'
import sizzle from './assets/sizzle.mp4'

export default function MobileVideo() {
    return (
        <div className=''>
            <video autoPlay loop muted>
                <source src={sizzle} type='video/mp4' />
            </video>
        </div>
    )
}
