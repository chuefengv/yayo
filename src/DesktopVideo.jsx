import React from 'react'
import './App.css';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import img1 from './assets/thumbnail2.1.png'
import img2 from './assets/thumbnail2.2.jpg'
import img3 from './assets/thumbnail3.1.jpg'
import img4 from './assets/thumbnail3.2.jpg'
import img5 from './assets/thumbnail4.1.png'
import img6 from './assets/thumbnail4.2.png'
import img7 from './assets/thumbnail5.jpg'
import img8 from './assets/thumbnail5.2.jpg'

export default function DesktopVideo() {
    return (
        <div className='carousel-container'>
            <Carousel axis='horizontal' autoPlay='true' infiniteLoop='true' interval='4000' showArrows={false} showIndicators={true} showThumbs={false} showStatus={false} swipeable={true} emulateTouch={true} swipeScrollTolerance={15}>
            <div>
                <img src={img2} alt=''></img>
            </div>
            <div>
                <img src={img7} alt=''></img>
            </div>
            <div>
                <img src={img4} alt=''></img>
            </div>
            <div>
                <img src={img6} alt=''></img>
            </div>
            <div>
                <img src={img1} alt=''></img>
            </div>
            <div>
                <img src={img3} alt=''></img>
            </div>
            <div>
                <img src={img8} alt=''></img>
            </div>
            <div>
                <img src={img5} alt=''></img>
            </div>
            </Carousel>
        </div>
    )
}
