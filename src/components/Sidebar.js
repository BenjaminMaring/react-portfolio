import React from 'react';
import './css/Sidebar.css';
import { motion } from "framer-motion"

export default function Sidebar() {
    return (
        <nav className="sidebar-wrapper">
            <motion.div className="sidebar-lineBefore"
                animate={{height: 200}}
                transition={{ease: "linear", duration: 1.2}}
            ></motion.div>


            <motion.div className="sidebar-socials" id="sidebar-social-wrapper"
                animate={{height: 150, margin: 10}}
                transition={{ease: "easeOut", duration: 1.2, delay: 1.2}}
            >
                <a className="sidebar-1" href="https://github.com/BenjaminMaring"><i className="fa-brands fa-github"></i></a>
                <a className="sidebar-2"href="https://www.linkedin.com/in/benjamin-maring-453637216/"><i className="fa-brands fa-linkedin-in"></i></a>
                <a className="sidebar-3" href="https://codepen.io/BenjaminMaring"><i className="fa-brands fa-codepen"></i></a>
                <a className="sidebar-4" href="mailto:maringben@hotmail.com"><i className="fa-regular fa-envelope"></i></a>
            </motion.div>


            <motion.div className="sidebar-lineAfter"
                animate={{height: 200}}
                transition={{ease: "linear", duration: 1.2}}
            ></motion.div>
        </nav>
    )
}