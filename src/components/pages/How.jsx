import React from 'react'
import '../../index.css'
// import ContactForm from "../ContactForm";

const How = () => {
  return (
    <div className="howContainer">
      <div className="howText">
        <h1>How to get in contact with me</h1>
        {/* <ContactForm /> */}
      <div className="contactInfo">
        <h1>Contact Information</h1>
        <h3>Address:  Slånbärstigen 11</h3>
        <h3>Mobile:  +46 73 370 6733</h3>
        <h3>Mail:  viktorkarlsson125@gmail.com</h3>
      </div>
        <h1>Links</h1>
      <div className="HowLinks">
        <a href={'https://www.linkedin.com/in/viktor-karlsson-7ba676a3'}>
          LinkedIn{' '}
        </a>
        <a href={'https://github.com/ViktorHek'}>Github</a>
      </div>
      </div>
    </div>
  )
}

export default How
