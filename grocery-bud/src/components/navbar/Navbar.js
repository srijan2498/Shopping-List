import React, { useState, useRef, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { links, social } from './data';
import './style.css'

const Navbar = () => {
    const [isSideBarOpen, setIsSideBarOpen]=useState(false)
    const linksContainerRef = useRef(null);
    const linksRef = useRef(null);
    useEffect(() => {
        const linksHeight = linksRef.current.getBoundingClientRect().height;
        console.log(linksHeight)
        if (isSideBarOpen) {
            linksContainerRef.current.style.height = `${linksHeight}px`;
        } else {
            linksContainerRef.current.style.height = '0px';
        }
    }, [isSideBarOpen]);
    return (
        <>
            <nav>
                <div className="logo">coding addict</div>
                <button className="toggle" onClick={() => setIsSideBarOpen(!isSideBarOpen)}><FaBars /></button>
                <ul className="links">
                    {links.map((link) => {
                        const { id, url, text } = link
                        return <a href={url} key={id}><li>{text}</li></a>
                    })}
                </ul>
                <ul className="social">
                    {social.map((link) => {
                        const { id, url, icon } = link
                        return <a href={url} key={id}><li>{icon}</li></a>
                    })}
                </ul>
            </nav>
            <div className="sidebar" ref={linksContainerRef}>
                <ul className="linksCont" ref={linksRef}>
                    {links.map((link) => {
                        const { id, url, text } = link
                        return <a href={url} key={id}><li>{text}</li></a>
                    })}
                </ul>
            </div>
        </>
    )
}

export default Navbar
