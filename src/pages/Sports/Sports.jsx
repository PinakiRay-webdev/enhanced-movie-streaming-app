import React from 'react'
import { useSelector } from 'react-redux'
const Sports = () => {

    const sidebarStatus = useSelector((state) => state.sidebar.isOpen)

  return (
    <div className={`w-full h-fit transition-all ease-in-out duration-150 ${sidebarStatus ? "pl-[10vw]" : "pl-[5rem]"}`} >
      <div className='h-screen px-3 py-2' >
        This is the sports page
      </div>
    </div>
  )
}

export default Sports
