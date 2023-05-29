import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import Home from "./pages/Home";
import AllProducts from "./pages/AllProducts";
import reportWebVitals from "./reportWebVitals";
import NotFound from "./pages/NotFound";
import NewProduct from "./pages/NewProduct";
import ProductDetail from "./pages/ProductDetail";
import MyCart from "./pages/MyCart";
import ProtectedRoute from "./pages/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <NotFound></NotFound>,
    children: [
      { index: true, path: "/", element: <Home></Home> },
      { path: "/products", element: <AllProducts></AllProducts> },
      {
        path: "/products/new",
        element: (
          <ProtectedRoute requireAdmin>
            <NewProduct></NewProduct>
          </ProtectedRoute>
        ),
      },
      {
        path: "/products/:id",
        element: <ProductDetail></ProductDetail>,
      },
      {
        path: "/carts",
        element: (
          <ProtectedRoute>
            <MyCart></MyCart>
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

reportWebVitals();
