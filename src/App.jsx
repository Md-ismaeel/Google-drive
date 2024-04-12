import { Children, useState } from 'react'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import LayoutTemplate from './LayoutTemplate/LayoutTemplate'
import { Home } from './Pages/Home'
import { MyDrive } from './Pages/MyDrive'
import Computers from './Pages/Computers'
import Starred from './Pages/Starred'
import ShareWidthMe from './Pages/ShareWidthMe'
import Recent from './Pages/Recent'
import Spam from './Pages/Spam'
import Bin from './Pages/Bin'
import FileStorage from './Pages/FileStorage'


const routes = createBrowserRouter([
  {
    path: '/', element: <LayoutTemplate />,

    children: [
      { path: '/home', element: <Home /> },
      { path: '/my-drive', element: <MyDrive /> },
      { path: '/computer', element: <Computers /> },
      { path: '/starred', element: <Starred /> },
      { path: '/shareWidthMe', element: <ShareWidthMe /> },
      { path: '/recent', element: <Recent /> },
      { path: '/spam', element: <Spam /> },
      { path: '/Bin', element: <Bin /> },
      { path: '/storage', element: <Bin /> },
    ]
  },
])

function App() {


  return (
    <RouterProvider router={routes} />
  )
}

export default App
