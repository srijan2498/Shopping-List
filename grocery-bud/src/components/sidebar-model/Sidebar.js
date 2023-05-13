import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { social, links } from './data'

const Sidebar = () => {
    return (
        <div className='sidebarContainer'>
            <div className="logo">Coding Addict</div>
            <div className="upperCloseBtn">
                <div className="close"><FaTimes /></div>
            </div>
            <div className="linkContainer">
                {links.map((link) => {
                    return <a href={`${link.url}`}>
                        <li>{link.icon} {link.text}</li>
                    </a>
                })}
            </div>
            <div className="socialContainer">
                {social.map((s) => {
                    return <a href={`${s.url}`}>
                        <li>{s.icon}</li>
                    </a>
                })}
            </div>
        </div>
    )
}

export default Sidebar
