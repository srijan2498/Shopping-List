import React from 'react'
import { FaBars } from 'react-icons/fa'
import './Sidebar.css'

const Home = () => {
    return (
        <div className='homeContainer'>
            <div className="toggleBtn">
                <FaBars />
            </div>
            <button className="modelBtn">Show Modal</button>
        </div>
    )
}

export default Home
