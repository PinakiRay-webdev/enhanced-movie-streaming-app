import React from 'react'
import { sidebarNav } from '../../utils/Utils' 
import { RiMenuUnfold4Line , RiMenuUnfold3Line2 } from "react-icons/ri";
import { useDispatch , useSelector } from 'react-redux';
import { toggleSideBar } from '../../Redux/Slice/sideBarSlice';

const Sidebar = () => {

    const sideBarStatus = useSelector((state) => state.sidebar.isOpen)
    const dispatch = useDispatch()


  return (
    <div className={`h-screen fixed ${sideBarStatus ? "w-[10rem]" : "w-[5rem] items-center"} bg-black flex flex-col justify-center gap-[4rem] px-4 transition-all ease-in-out duration-150 `} >
      {
        sidebarNav?.map((Element , id) =>(
            <div className='flex items-center gap-4 cursor-pointer ' key={id} >
                <p className='text-amber-500 text-2xl' >{<Element.icon/>}</p>
                <p className={`text-amber-500 text-sm ${sideBarStatus ? "block" : "hidden"} `} >{Element.text}</p>
            </div>
        ))
      }
        <p className='text-white absolute top-4 right-2 text-xl cursor-pointer' onClick={() => dispatch(toggleSideBar())} > {sideBarStatus ? <RiMenuUnfold4Line/> : <RiMenuUnfold3Line2/> }</p>
    </div>
  )
}

export default Sidebar
