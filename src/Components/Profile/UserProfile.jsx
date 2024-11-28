import React from 'react'
import { useSelector } from 'react-redux'
const UserProfile = () => {

    const sidebarStatus = useSelector((state) => state.sidebar.isOpen)

  return (
    <div className='w-full h-fit' >
      <div className={`${sidebarStatus ? "pl-[10vw]" : "pl-[5rem]"} h-screen transition-all ease-in-out duration-150`} >
        <p className='text-white' >This is the user Profiler</p>
      </div>
    </div>
  )
}

export default UserProfile
