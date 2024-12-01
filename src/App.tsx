import { Route, Routes } from 'react-router-dom'
import './App.css'
import AppLayout from './components/Layout'
import ProductList from './components/ProductList'
import Home from './components/Home'
import ProductDetails from './components/ProductDetails'
import CreateProduct from './components/CreateProduct'
import EditProduct from './components/EditProduct'
import Login from './components/Login'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path='/products' element={<ProductList />} />
          <Route path='/create' element={<CreateProduct />} />
          <Route path='/details/:id' element={<ProductDetails />} />
          <Route path='/edit/:id' element={<EditProduct />} />
          <Route path='/about' element={<p>About Page!</p>} />

          <Route path='/login' element={<Login />} />
          <Route path='*' element={<p>Not Found!</p>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
