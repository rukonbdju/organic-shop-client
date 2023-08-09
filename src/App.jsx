import './App.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/AppRoute/AppRoute'
import AuthProvider from './contextApi/AuthProvider/AuthProvider'

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  )
}

export default App;
