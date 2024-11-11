import React from 'react'
import { useSelector } from 'react-redux'

const Auth = () => {

    const sidebarStatus = useSelector((state) => state.sidebar.isOpen)

  return (
    <div className={`w-full h-fit transition-all ease-in-out duration-150 ${sidebarStatus ? "pl-[10rem]" : "pl-[5rem]"}`} >
      <div>
        This is the login page
      </div>
    </div>
  )
}

export default Auth
