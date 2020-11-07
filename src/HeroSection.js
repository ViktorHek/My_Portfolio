import React from 'react'
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="/images/video-2.mp4" autoPlay loop muted />
            <h1 id="hello">Viktor Karlsson!</h1>
        </div>
    )
}
export default HeroSection