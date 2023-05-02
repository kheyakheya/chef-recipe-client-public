import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import MainLayout from './Layout/MainLayout.jsx';
import Home from './Pages/Home.jsx';
import Login from './Pages/Login.jsx';
import Registration from './Pages/Registration.jsx';
import ChefDetail from './Pages/ChefDetail.jsx';
import Blog from './Pages/Blog.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
   
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Registration></Registration>

      },
      {
        path:":id",
        element:<ChefDetail></ChefDetail>,
        loader:({params})=>fetch(`http://localhost:5000/chefs/${params.id}`)

      },
      {
        path:'/blog',
        element:<Blog></Blog>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)