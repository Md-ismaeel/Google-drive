import { Children, useState } from 'react'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import LayoutTemplate from './LayoutTemplate/LayoutTemplate'
import { Home } from './Pages/Home'
import { MyDrive } from './Pages/MyDrive'

const routes = createBrowserRouter([
  {
    path: '/', element: <LayoutTemplate />,

    children: [
      { path: 'home', element: <Home /> },
      { path: 'my-drive', element: <MyDrive /> }
    ]
  },
])

function App() {


  return (
    <RouterProvider router={routes} />
  )
}

export default App
