import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/admin/dashboard/Dashboard'
import Layout from './components/admin/Layout'
import Product from './pages/admin/dashboard/product/Product'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<h1>Hello world</h1>} />

      <Route element={<Layout/>} >
            <Route path='/admin/' element={<Dashboard />} />
             <Route path="admin/product" element={<Product />} />
      </Route>

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App