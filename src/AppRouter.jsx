import {
    createBrowserRouter,
    // RouterProvider,
  } from "react-router-dom";
import Login from './routes/login';
import Register from './routes/register';
import Home from './routes/home';
import OrderPage from "./routes/Checkout";

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
    },
    {
        path: "/checkout",
        element:<OrderPage/>
    }
])

export default router;