import React from 'react'
import Navbar from '../componets/Navbar'
import Hero from '../componets/Hero'
import Aboutus from '../componets/Aboutus'
import Service from '../pages/Service'
import Shop from './Shop'
import BookAppoinment from './BookAppoinment'

function Home() {
  return (
    <div className=' h-screen w-full'>
      <Hero/>
      <Aboutus/>
      <Service/>
      <Shop/>
      
      
    </div>
  )
}

export default Home
