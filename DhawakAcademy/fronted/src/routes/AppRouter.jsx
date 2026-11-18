import React from 'react'
import MainLayout from '../layout/MainLayout'
import {createBrowserRouter,RouterProvider} from 'react-router'
import Second from '../layout/Second'
import ContactForm from '../Features/ContectF/ui/ContectForm'

import CreateAllData from '../Features/CreateF/ui/CreateAllData'
import Login from '../Features/login/ui/Login'
import GetContactData from '../Features/getAllContact/ui/GetContactData'

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
            },{
                path:"/login",
                element:<Login/>
            },{
                path:"/getcontactdata",
                element:<GetContactData/>
            }
           
        ]
    }

    ])
  return (
   <RouterProvider router={router} />
  )
}

export default AppRouter
