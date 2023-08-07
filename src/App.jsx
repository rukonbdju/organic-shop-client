import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeLayout from './layouts/HomeLayout/HomeLayout'
import ProductLayout from './layouts/ProductLayout/ProductLayout'
import ProductsLayout from './layouts/ProductsLayout/ProductsLayout'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeLayout></HomeLayout>} ></Route>
          <Route path='/home' element={<HomeLayout></HomeLayout>} ></Route>
            <Route path='/products' element={<ProductsLayout></ProductsLayout>}></Route>
          <Route path='/products/:id' element={<ProductLayout></ProductLayout>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
