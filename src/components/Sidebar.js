import React from 'react';
import './css/Sidebar.css';

function Sidebar() {
    return (
        <nav className="sidebar-wrapper">
            <div className="sidebar-lineBefore"></div>
            <div className="sidebar-socials">
                <a className="sidebar-1" href="https://github.com/BenjaminMaring"><i class="fa-brands fa-github"></i></a>
                <a className="sidebar-2"href="https://www.linkedin.com/in/benjamin-maring-453637216/"><i class="fa-brands fa-linkedin-in"></i></a>
                <a className="sidebar-3" href="https://discord.com/users/xlnvis#5333"><i class="fa-brands fa-discord"></i></a>
                <a className="sidebar-4" href="mailto:maringben@hotmail.com"><i class="fa-regular fa-envelope"></i></a>
            </div>
            <div className="sidebar-lineAfter"></div>
        </nav>
    )
}

export default Sidebar;