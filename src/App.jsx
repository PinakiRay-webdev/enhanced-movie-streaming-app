import React from 'react'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Sidebar from './pages/SideBar/Sidebar'
const App = () => {

  const router = createBrowserRouter([
    {
      path : '/',
      element : <Sidebar/>
    }
  ])

  return (
    <div>     
      <RouterProvider router={router} />
    </div>
  )
}

export default App
