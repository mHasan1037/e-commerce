import React from 'react'
import HeroSection from '../../Component/HeroSection/HeroSection'
import ProductSection from '../../Component/ProductSection/ProductSection'
import NavBar from '../NavBar/NavBar'

const HomePage = () => {
  return (
    <>
        <NavBar />
        <HeroSection />
        <ProductSection />
    </>
  )
}

export default HomePage