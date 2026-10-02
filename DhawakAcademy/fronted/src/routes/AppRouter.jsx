import React from 'react'
import MainLayout from '../Layout/MainLayout'
import {createBrowserRouter,RouterProvider} from 'react-router'
import Second from '../Layout/Second'

const AppRouter = () => {
   let router= createBrowserRouter([
    {
        path:"/",
        element:<MainLayout/>,
        children:[
            {
                path:"",
                element:<Second/>
            }
        ]
    }

    ])
  return (
   <RouterProvider router={router} />
  )
}

export default AppRouter
