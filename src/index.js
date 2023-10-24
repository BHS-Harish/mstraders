import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Home from './pages/Home';
import Crackers from './pages/Crackers';
import Gallery from './pages/Gallery';
import Error from './pages/Error'
import './index.css';
import reportWebVitals from './reportWebVitals';
const router=createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/crackers",
    element:<Crackers/>
  },
  {
    path:"/gallery",
    element:<Gallery/>
  },
  {
    path:"/*",
    element:<Error/>
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
