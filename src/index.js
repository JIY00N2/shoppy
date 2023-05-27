import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './index.css';
import App from './App';
import Home from './pages/Home';
import AllProducts from './pages/AllProducts';
import reportWebVitals from './reportWebVitals';
import NotFound from './pages/NotFound';
import NewProduct from './pages/NewProduct';
import ProductDetail from './pages/ProductDetail';
import MyCart from './pages/MyCart';


const router = createBrowserRouter([
  {
    path:'/',
    element:<App></App>,
    errorElement: <NotFound></NotFound>,
    children:[
      {index: true, path:'/', element:<Home></Home>},
      {path: '/products', element: <AllProducts></AllProducts>},
      {
        path:'/products/new',
        element: <NewProduct></NewProduct>,
      },
      {
        path:'/products/:id',
        element: <ProductDetail></ProductDetail>,
      },
      {
        path: '/carts',
        element:<MyCart></MyCart>,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router ={router}></RouterProvider>
  </React.StrictMode>
);

reportWebVitals();
