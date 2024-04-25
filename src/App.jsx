import './App.css'
import Cart from './components/Cart'
import Dashboard from './components/Dashboard'
import Products from './components/Products'
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {

  return (
    <Router>
      <Dashboard />
      <Routes >
        <Route path='/' element={<Products />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>

    </Router>
  )
}

export default App
