import React from 'react'
import { createBrowserRouter , RouterProvider , Navigate} from 'react-router-dom'
import Sidebar from './pages/SideBar/Sidebar'
import Home from './pages/Home/Home'
import Auth from './Auth/Auth'
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
      element : <> <Sidebar/><Auth/> </>
    },
  ])

  return (
    <div>     
      <RouterProvider router={router} />
    </div>
  )
}

export default App
