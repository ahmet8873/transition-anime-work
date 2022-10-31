import React from 'react'
import { useState } from 'react'

const Sidebar = () => {
    const[isSidebarOpen,setIsSidebarOpen]=useState(false)
  return (
    <div className='sidebar-container'>
        <div className={`sidebar ${isSidebarOpen?'open-sidebar':''}`}></div>
        <button onClick={()=>setIsSidebarOpen(!isSidebarOpen)} className='sidebar-btn'>open sidebar</button>
    </div>
  )
}

export default Sidebar