import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeLayout from './layouts/HomeLayout/HomeLayout'
import ProductLayout from './layouts/ProductLayout/ProductLayout'
import ProductsLayout from './layouts/ProductsLayout/ProductsLayout'
import AuthLayout from './layouts/AuthLayout/AuthLayout'
import Login from './components/Auth/Login/Login'
import Register from './components/Auth/Register/Register'
import ResetPassword from './components/Auth/ResetPassword/ResetPassword'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeLayout></HomeLayout>} ></Route>
          <Route path='/home' element={<HomeLayout></HomeLayout>} ></Route>
          <Route path='/products' element={<ProductsLayout></ProductsLayout>}></Route>
          <Route path='/products/:id' element={<ProductLayout></ProductLayout>}></Route>
          <Route path='/auth' element={<AuthLayout></AuthLayout>}>
            <Route index element={<Login></Login>}></Route>
            <Route path='login' element={<Login></Login>}></Route>
            <Route path='register' element={<Register></Register>}></Route>
            <Route path='resetPassword' element={<ResetPassword></ResetPassword>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
