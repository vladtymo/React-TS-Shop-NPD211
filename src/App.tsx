import { Route, Routes } from 'react-router-dom'
import './App.css'
import AppLayout from './components/Layout'
import ProductList from './components/ProductList'
import Home from './components/Home'
import ProductDetails from './components/ProductDetails'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path='/products' element={<ProductList />} />
          <Route path='/details/:id' element={<ProductDetails />} />
          <Route path='/about' element={<p>About Page!</p>} />
          <Route path='*' element={<p>Not Found!</p>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
