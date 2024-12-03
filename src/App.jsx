import React from 'react'
import { createBrowserRouter , RouterProvider , Navigate} from 'react-router-dom'
import Sidebar from './Components/SideBar/Sidebar'
import Home from './pages/Home/Home'
import Movies from './pages/Movies/Movies'
import TvShows from './pages/TV shows/TvShows'
import Sports from './pages/Sports/Sports'
import Radio from './pages/Radio/Radio'
import Login from './Auth/Login/Login'
import SignUp from './Auth/SignUp/SignUp'
import UserProfile from './Components/Profile/UserProfile'
import { ToastContainer } from 'react-toastify'
import MovieDes from './pages/Description/Movie/MovieDes'

const App = () => {

  const router = createBrowserRouter([
    {
      path : '/',
      element : <Navigate to="/home" replace={true} />
    },
    {
      path : '/profile',
      element : <><Sidebar/><UserProfile/></>
    },
    {
      path : '/home',
      element : <> <Sidebar/><Home/> </>
    },
    {
      path : '/login',
      element : <> <Sidebar/><Login/> </>
    },
    {
      path : '/signUp',
      element : <> <Sidebar/><SignUp/> </>
    },
    {
      path : '/movies',
      element : <> <Sidebar/><Movies/> </>
    },
    {
      path : '/Tv Shows',
      element : <> <Sidebar/><TvShows/> </>
    },
    {
      path : '/sports',
      element : <> <Sidebar/><Sports/> </>
    },
    {
      path : '/radio',
      element : <> <Sidebar/><Radio/> </>
    },
    {
      path : '/movie/:id',
      element : <> <Sidebar/><MovieDes/> </>
    },
  ])

  return (
    <div className='bg-[#000814]' >     
      <RouterProvider router={router} />
      <ToastContainer/>
    </div>
  )
}

export default App
