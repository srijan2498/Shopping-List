import React from 'react';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from './context';
import './stripe.css'

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();
  return (
    <nav>
      <div className="logo">stripe</div>
      <button className="toggleBtn" onClick={openSidebar}><FaBars /></button>
      <ul className="links">
        <li>
          <button className='link-btn'>
            products
          </button>
        </li>
        <li>
          <button className='link-btn'>
            developers
          </button>
        </li>
        <li>
          <button className='link-btn'>
            company
          </button>
        </li>
      </ul>
      <button className="signin-btn">Sign In</button>
    </nav>
  )
}

export default Navbar
