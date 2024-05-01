import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layout'
import Home from './pages/Home'
import House from './pages/House'

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      {
        path: 'house', children: [
          { path: ':id', element: <House /> }
        ]
      },
    ]
  }])

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}
