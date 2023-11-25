import {
    createBrowserRouter,
    // RouterProvider,
  } from "react-router-dom";
import Login from './routes/login';
import Register from './routes/register';
import Home from './routes/home';

const router = createBrowserRouter([
    {
        path: "/",
        element: <div>Hello world!</div>,
    },
    {
        path: "/login",
        element: <Login/>,
    },
    {
        path: "/register",
        element: <Register/>,
    },
    {
        path: "/home",
        element: <Home/>,
    }
])

export default router;