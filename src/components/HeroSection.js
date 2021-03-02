import React from "react";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/images/video-2.mp4" autoPlay loop muted />
      <h1 id="hello">Hi! My name is Hans Erik Viktor Karlsson!</h1>
      <p>
        Let me give you a short introduction to the site. The site is all about
        me and my achievement. so you probably want to know Who I am, What i've
        done, Why you should hire me and How to get in contact. therefore I have
        provided you with those things. You can find it in the menu or below
      </p>
    </div>
  );
}
export default HeroSection;
