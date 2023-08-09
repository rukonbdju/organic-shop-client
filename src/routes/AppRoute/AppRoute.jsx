import { createBrowserRouter } from "react-router-dom";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import Home from "../../Pages/Home/Home";
import Products from "../../Pages/Products/Products";
import Product from "../../Pages/Product/Product";
import Cart from "../../Pages/Cart/Cart";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import Shipping from "../../Pages/Shipping/Shipping";
import AdminDashboard from "../../Pages/AdminDashboard/AdminDashboard";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'products',
        element: <Products></Products>
      },
      {
        path: 'products/:id',
        element: <Product></Product>
      },
      {
        path: 'cart',
        element: <Cart></Cart>
      },
      {
        path: 'shipping',
        element: <Shipping></Shipping>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path: 'resetPassword',
        element: <div>Reset password</div>
      }
    ]
  },
  {
    path:'/dashboard',
    element:<Dashboard></Dashboard>,
    children:[
      {
        path:'/dashboard',
        element:<div>Your account</div>
      },
      {
        path:'orders',
        element:<div>Your order</div>
      },
      {
        path:'shipping-address',
        element:<div>Your your shipping address</div>
      },
    ]
  },
  {
    path:'/admin-dashboard',
    element:<AdminDashboard></AdminDashboard>,
    children:[
      {
        path:'/admin-dashboard',
        element:<div>all products</div>
      },
      {
        path:'orders',
        element:<div>all orders</div>
      },
      {
        path:'users',
        element:<div>all users</div>
      },
      {
        path:'add-product',
        element:<div>add product</div>
      },
    ]
  }
])