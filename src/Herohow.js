import React from 'react'
import './Herowho.css';
import ContactForm from "./ContactForm";

function Herohow() {
    return (
        <div className='hero-container'>
            <video src="/images/video-2.mp4" autoPlay loop muted />
            <h1 id="how-header">How?</h1>
            <p>
                Oh! so you want to know how to get in contact with me? i'm glad to hear!
            </p>
            <div>
                <ContactForm />
            </div>
        </div>
    )
}
export default Herohow