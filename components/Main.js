import React from 'react'
import Navbar from './Navbar'
import About from './About'
import Header from './Header/Header'
import Products from './Products/Products'
import Fillters from './Header/Fillters'
import Footer from './Footer/Footer'

const Main = () => {
  return (
    <>
      <div className='main-container'>
        <Navbar />
        <About />
        <Header />
        <Footer />
      </div>
    </>
  )
}

export default Main
