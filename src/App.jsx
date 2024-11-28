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
const App = () => {

  const router = createBrowserRouter([
    {
      path : '/',
      element : <Navigate to="/home" replace={true} />
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
  ])

  return (
    <div className='bg-black' >     
      <RouterProvider router={router} />
    </div>
  )
}

export default App
