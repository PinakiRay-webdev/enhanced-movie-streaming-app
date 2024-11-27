import React from 'react'
import { useSelector } from 'react-redux'
import Banner from './Components/Banner'
import LatestMovies from './Components/LatestMovies/LatestMovies'

const Home = () => {

    const sidebarStatus = useSelector((state) => state.sidebar.isOpen)

  return (
    <div className={`w-full h-fit transition-all ease-in-out duration-150 overflow-x-hidden ${sidebarStatus ? "pl-[10vw]" : "pl-[5rem]"}`} >
      <div className='h-screen'>
        <Banner/>
        <LatestMovies/>
      </div>
    </div>
  )
}

export default Home
