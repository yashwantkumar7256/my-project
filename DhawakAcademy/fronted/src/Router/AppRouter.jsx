import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainProtected from "./protected/MainProtected";

import MainLayout from "../layout/MainLayout";
import ProfilePage from "../features/profile/ui/pages/ProfilePage";
import HomePage from "../shared/routes/HomePage";
import Login from "../features/auth/ui/pages/Login";
import Register from "../features/auth/ui/pages/Register";

const AppRouter = () => {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <MainProtected />,
      children: [
        {
          path:'',
          element:<MainLayout/>,
          children:[
            {
                path:'',
                element:<HomePage/>

            },
            {
              path:'profile',
              element:<ProfilePage/>
            },
            {
              path:'login',
              element:<Login/>
            },
            {
              path:'register',
              element:<Register/>
            }
          ]
        }
      ],
    },
  
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
