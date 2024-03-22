import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx';
import Home from './Components/Home/Home.jsx';
import AppliedJobs from './Components/AppliedJobs/AppliedJobs.jsx';
import Statistic from './Components/statistic/Statistic.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage />,
    children : [
      {
        path : '/',
        element: <Home />
      },
      {
        path: '/applied',
        element: <AppliedJobs />
      },
      {
        path: '/statistic',
        element: <Statistic />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
