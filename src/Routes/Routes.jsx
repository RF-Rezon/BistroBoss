import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../components/Login/Login";
import SignUp from "../components/SignUp/SignUp";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu";
import Order from "../pages/Order/Order";
import Secret from './../pages/Secret/Secret';
import PrivateRoute from './../Auth/PrivateRoute';


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: 'menu',
            element: <Menu/>
        },
        {
            path: 'order/:category',
            element: <Order/>
        },
        {
            path: 'login',
            element: <Login/>
        },
        {
            path: 'signup',
            element: <SignUp/>
        },
        {
            path: 'secret',
            // element: <Secret/>
            element: <PrivateRoute><Secret/></PrivateRoute> 
        },
        
      ]
    },
  ]);