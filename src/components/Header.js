// import react from 'react'
import './Header.css'

function Header() {
    return (
        <div className="Header-wrapper">
            <div className="name">
                Benjamin Maring
            </div>
            <ul className="header-list">
                <li><a href="https://www.google.com">About</a></li>
                <li><a href="https://www.google.com">Projects</a></li>
                <li><a href="https://www.google.com">Certificates</a></li>
                <li><a href="https://www.google.com">Contact</a></li>
            </ul>
        </div>
    );
}

export default Header;