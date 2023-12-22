import React from 'react';
import './Sidebar.css';

function Sidebar() {
    return (
        <nav className="sidebar-wrapper">
            <div className="sidebar-lineBefore"></div>
            <div className="sidebar-socials">
                <a href="https://github.com/BenjaminMaring"><i class="fa-brands fa-github"></i></a>
                <a href="https://www.linkedin.com/in/benjamin-maring-453637216/"><i class="fa-brands fa-linkedin-in"></i></a>
                <a href="mailto:maringben@hotmail.com"><i class="fa-regular fa-envelope"></i></a>
            </div>
            <div className="sidebar-lineAfter"></div>
        </nav>
    )
}

export default Sidebar;