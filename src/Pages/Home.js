import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Landing from '../components/Landing'
import About from '../components/About/About'
import Services from '../components/Services'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Landing/>
        <About/>
        <Services/>
        <Contact/>
    </div>
  )
}

export default Home