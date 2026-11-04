import React from 'react'
import MainLayout from '../Layout/MainLayout'
import {createBrowserRouter,RouterProvider} from 'react-router'
import Second from '../Layout/Second'
import ContactForm from '../Features/ContectF/ui/ContectForm'

import CreateAllData from '../Features/CreateF/ui/CreateAllData'

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
            },{
                path:"/create",
                element:<CreateAllData/>
            }
           
        ]
    }

    ])
  return (
   <RouterProvider router={router} />
  )
}

export default AppRouter
