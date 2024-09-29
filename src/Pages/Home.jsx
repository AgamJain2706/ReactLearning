import React from 'react'
import Carousel from '../components/Home/Carousel/Carousel'
import Form from '../components/Home/Form/Form'
import Auth from '../components/Home/Authorize/Auth';
import Blog from '../components/Home/Blogs/Blog'
import Services from '../components/Home/JetServices/Services';
import Card from '../components/Home/LastPart/card'



const Home = () => {
  return (
    <>
      <Carousel  />
      <Form />
      <Auth />
      <Blog />
    <Services />
      <Card />
    </>
  )
}

export default Home