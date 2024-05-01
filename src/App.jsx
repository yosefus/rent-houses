import React, { createContext, useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layout'
import Home from './pages/Home'
import House from './pages/House'
import data from './data.json'

export const UserContext = createContext()
export const PrefContext = createContext()

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      {
        path: 'house', children: [
          {
            path: ':id', element: <House />
          }
        ]
      },
    ]
  }])

  const languages  = []
export default function App() {
  const [user, setUser] = useState()
  const [cur, setCur] = useState('usd')
  const [isDark, setIsDark] = useState()
  const [language, setLanguage] = useState('en')

  const changeLang = (lan) => {
    if (languages.includes(lang)) { 
      setLanguage(lang)
    }
  }
  
  return (
    <UserContext.Provider value={[user, setUser]}>
      <PrefContext.Provider value={{ cur, setCur, isDark, setIsDark, language, setLanguage }}>
        <RouterProvider router={router} />
      </PrefContext.Provider>
    </UserContext.Provider>
  )
}
