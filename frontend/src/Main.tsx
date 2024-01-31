import * as React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'

const Main: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/register',
      element: <Register />,
    },
    {
      path: '/dashboard',
      element: <Dashboard />,
    },
  ])

  return <RouterProvider router={router} />
}

export default Main
