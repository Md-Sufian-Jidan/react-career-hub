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
import JobDetail from './Components/JobsDetails/JobDetail.jsx';
import { HelmetProvider } from 'react-helmet-async';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/applied',
        element: <AppliedJobs />,
        loader: (() => fetch(`../jobs.json`))//do not load all data. load only what you need
      },
      {
        path: '/job/:id',
        element: <JobDetail />,
        loader: (() => fetch(`../jobs.json`))//do not load all data. load only what you need
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
    <HelmetProvider>
      <RouterProvider router={router}></RouterProvider>
    </HelmetProvider>
  </React.StrictMode>
)
