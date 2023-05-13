import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from './context'
import sublinks from './data'

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  console.log(isSidebarOpen)
  return (
    <>
      <div className={`${isSidebarOpen?"overlay-show":""}`}></div>
      <div className={`${isSidebarOpen ? "sidebar-open" :"sidebar-close"}`}>
        <button className="close" onClick={closeSidebar}><FaTimes /></button>
        <div className="sidebar-links">
          {sublinks.map((item, index) => {
            const { page, links } = item
            return <div className="item" key={index}>
              <h3 className="itemheading">{page}</h3>
              {links.map((link, index) => {
                const { label, icon, url } = link
                return <a href={url} className="link">{icon}{` ${label}`}</a>
              })}
            </div>
          })}
        </div>
      </div>
    </>
  )
}

export default Sidebar
