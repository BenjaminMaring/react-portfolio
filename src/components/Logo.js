import React from 'react';
import './css/Logo.css'

export default function Logo() {
    return (
        <div className="logo-wrapper">
            <a href=""><img className="logo-top" alt="logo" src="./images/logo-top.png"/></a>
            <img alt="logo" src="./images/logo-bottom.png"/>
        </div>
    )
}