import React from 'react'
import HeroSection from '../../Component/HeroSection/HeroSection'
import ProductSection from '../../Component/ProductSection/ProductSection'
import Footer from '../Footer/Footer'

const HomePage = ({getProduct}) => {


  return (
    <>
        <HeroSection />
        <ProductSection getProduct={getProduct} />
    </>
  )
}

export default HomePage