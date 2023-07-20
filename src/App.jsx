import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeLayout from './layouts/HomeLayout/HomeLayout'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeLayout></HomeLayout>} ></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
