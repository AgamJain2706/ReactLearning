import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from '../src/Layout.jsx'
import Form from './Pages/Form.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import SubCategory from './components/DynamicVision/SubCategory.jsx'
import Category from './components/DynamicVision/Category.jsx'
import BlogDetail from './Pages/BlogDetail.jsx'

const router = createBrowserRouter( 
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='/' element={<Home />} />
      <Route path='/Form' element={<Form />} />
      <Route path='/Category/:id' element={<Category/>} />
      <Route path='/Category/:id/SubCategory/:subid' element={<SubCategory/>} />
      <Route path='/LuxoskyBlogs' element={<BlogDetail/>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
  </>,
)
