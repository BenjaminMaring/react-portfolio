import React from "react";
import './css/Hero.css'

function Hero() {
    return (
        <div className="hero-wrapper">
            <h1><span data-string="Front" className="delay-one">Front</span> <span data-string="End" className="delay-two">End</span><br />
                <span data-string="Software" className="delay-three">Software</span> <span data-string="Engineer" className="delay-four">Engineer</span></h1>
            <h5>Hello, my name is <span className="hero-accent">Benjamin Maring</span>,</h5>
            <h6>and I am an aspiring full stack developer. Currently I am learning web developement as an intern at <a className="hero-bvt" href="https://www.bayvalleytech.com">Bay Valley Tech</a>, as well as a technician at a small MSP doing a wide variety of tasks.</h6>
        </div>
    );
}

export default Hero;