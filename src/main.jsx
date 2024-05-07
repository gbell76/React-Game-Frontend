import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Login from './pages/Login.jsx'
import Home from './pages/Home.jsx'
import Challenge from './pages/Challenge.jsx'
import FreeForAll from './pages/FreeForAll.jsx'
import Mayhem from './pages/Mayhem.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: '/Home',
        element: <Home />,
      },
      {
        path: '/Challenge',
        element: <Challenge />
      },
      {
        path: '/FreeForAll',
        element: <FreeForAll />
      },
      {
        path: '/Mayhem',
        element: <Mayhem />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
