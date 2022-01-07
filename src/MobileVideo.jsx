import React,{useState} from 'react'
import './App.css';
import { Carousel } from 'react-responsive-carousel';
import { Icon } from '@iconify/react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import img1 from './assets/thumbnail2.1.webp'
import img2 from './assets/thumbnail2.2.webp'
import img3 from './assets/thumbnail3.1.webp'
import img5 from './assets/thumbnail4.1.webp'
import img6 from './assets/thumbnail4.2.webp'
import img7 from './assets/thumbnail5.webp'
import img8 from './assets/thumbnail5.2.webp'

export default function MobileVideo() {
    const [index, setIndex] = useState(0);
  
    function next(){
        setIndex(index+1)
        if(index===6){
            setIndex(0)
        }
    }
  
    function prev(){
        setIndex(index-1)
        if(index===0){
            setIndex(6)
        }
    }

    return (
        <div className='carousel-container'>
            <Carousel selectedItem={index} axis='horizontal' autoPlay='true' infiniteLoop='true' interval='4000' showArrows={false} showIndicators={true} showThumbs={false} showStatus={false} swipeable={false} >
                <div className='carousel-img-container'>
                    <img src={img2} alt=''></img>
                </div>
                <div className='carousel-img-container'>
                    <img src={img7} alt=''></img>
                </div>
                <div className='carousel-img-container'>
                    <img src={img6} alt=''></img>
                </div>
                <div className='carousel-img-container'>
                    <img src={img1} alt=''></img>
                </div>
                <div className='carousel-img-container'>
                    <img src={img3} alt=''></img>
                </div>
                <div className='carousel-img-container'>
                    <img src={img8} alt=''></img>
                </div>
                <div className='carousel-img-container'>
                    <img src={img5} alt=''></img>
                </div>
            </Carousel>
            
            <div id='left-container'>
                <Icon icon="ant-design:left-outlined" id='left' onClick={()=>prev()}/>
            </div>

            <div id='right-container'>
                <Icon icon="ant-design:right-outlined" id='right' onClick={()=>next()}/>
            </div>
        </div>
    )
}
