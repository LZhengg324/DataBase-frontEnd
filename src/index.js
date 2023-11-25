import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './common/style/frame.css'
import {
    // createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  import router from './AppRouter';
// import Login from './routes/login';
// import Register from './routes/register';
// import Home from './routes/home';

// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <div>Hello world!</div>,
//     },
//     {
//         path: "/login",
//         element: <Login/>,
//     },
//     {
//         path: "/register",
//         element: <Register/>,
//     },
//     {
//         path: "/home",
//         element: <Home/>,
//     }
//   ])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <App className="App"/>
    <RouterProvider router={router}/>
    </>
);
