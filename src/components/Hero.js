import React from "react";
import './css/Hero.css'

function Hero() {
    return (
        <div className="hero-wrapper">
            <h5>Hello, my name is <span className="hero-accent">Benjamin Maring</span>, a</h5>
            <h1><span data-string="Front" className="delay-one hero-first">Front</span> <span data-string="End" className="delay-two hero-first">End</span></h1>
            <h1><span data-string="Software" className="delay-three">Software</span> <span data-string="Engineer" className="delay-four">Engineer</span></h1>
            <h6>Currently I am learning web developement as an intern at <a className="hero-bvt" href="https://www.bayvalleytech.com">Bay Valley Tech</a>, as well as a technician at a small MSP doing a wide variety of tasks.</h6>
            <button className="hero-button" onClick={() => console.log("clicked")}>View My Projects</button>
        </div>
    );
}

export default Hero;