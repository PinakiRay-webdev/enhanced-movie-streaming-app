import React from 'react'
import { useSelector } from 'react-redux'

const Home = () => {

    const sidebarStatus = useSelector((state) => state.sidebar.isOpen)

  return (
    <div className={`w-full h-fit transition-all ease-in-out duration-150 ${sidebarStatus ? "pl-[10rem]" : "pl-[5rem]"}`} >
      <div className='bg-red-400 h-screen px-3 py-2' >
        <p>This is the home page</p>
      </div>
    </div>
  )
}

export default Home
