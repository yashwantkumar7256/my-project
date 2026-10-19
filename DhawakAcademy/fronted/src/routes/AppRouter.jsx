import React from 'react'
import MainLayout from '../Layout/MainLayout'
import {createBrowserRouter,RouterProvider} from 'react-router'
import Second from '../Layout/Second'
import ContactForm from '../Features/ContectF/ui/ContectForm'

const AppRouter = () => {
   let router= createBrowserRouter([
    {
        path:"/",
        element:<MainLayout/>,
        children:[
            {
                path:"",
                element:<Second/>
            },{
           path:"/contact",
            element:<ContactForm/>
            }
           
        ]
    }

    ])
  return (
   <RouterProvider router={router} />
  )
}

export default AppRouter
