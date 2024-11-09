import { createBrowserRouter, Navigate } from "react-router-dom";
import Main from "../pages/main"
import Home from "../pages/home"
import Mall from "../pages/mall"
import User from "../pages/user"
import PageOne from "../pages/other/pageOne"
import PageTwo from "../pages/other/pageTwo"
import Login from "../pages/login"

const router = [
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Navigate to='home' replace />
      },
      {
        path: "home",
        element: <Home />
      },
      {
        path: "mall",
        element: <Mall />
      },
      {
        path: "user",
        element: <User />
      },
      {
        path: 'other',
        children: [
          {
            path: 'pageone',
            element: <PageOne />
          },
          {
            path: 'pagetwo',
            element: <PageTwo />
          }
        ]
      }
    ]
  },
  {
    path: "login",
    element: <Login />
  }
]

export default createBrowserRouter(router)