import React,{useEffect} from 'react'
import Header from './components/LayoutParts/Navbar/Header'
import Footer from './components/LayoutParts/Footer/Footer'
import { Outlet } from 'react-router-dom'
import Nav from './components/LayoutParts/Nav/Nav'

const Layout = () => {

  return (
    <>
    <Header/>
    <Nav/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout