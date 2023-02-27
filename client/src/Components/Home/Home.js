import React from 'react'
import Hero from './Hero'
import Partner from './Partner'
import Footer from './Footer'
import Homenav from './homenav'
import About from './About'
import Contact from './Contact'

function Home() {
  return (
    <div>
        <Homenav />
        <Hero />
        <About/>
        <Partner />
        <Contact />
        <Footer />
    </div>
  )
}

export default Home