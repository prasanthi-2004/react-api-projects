import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Products from './products/Products.jsx';
import Recepies from './recepies/Recepies.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Products/>,
  },
   {
    path: "/recepies",
    element: <Recepies/>,
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
