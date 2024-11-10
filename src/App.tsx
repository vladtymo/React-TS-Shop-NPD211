import { Route, Routes } from 'react-router-dom'
import './App.css'
import AppLayout from './components/Layout'
import ProductList from './components/ProductList'
import Home from './components/Home'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path='/products' element={<ProductList />} />
          <Route path='/about' element={<p>About Page!</p>} />
          <Route path='*' element={<p>Not Found!</p>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
