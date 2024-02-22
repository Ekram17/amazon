import React from 'react'
import Layout from "../../Components/Layout/Layout"
import Carousel from "../../Components/Carousel/CarouselEffect"
import Category from '../../Components/Category/Category';
import Product from "../../Components/Product/Product"
import Footer from "../../Components/Footer/Footer"

function Landing() {
  return (
    <Layout>
 
      <Carousel />
      <Category />
      <Product />
      <Footer/>
    </Layout>
  )
}

export default Landing