import React from 'react'
import Navbar from '../componets/Navbar'
import Hero from '../componets/Hero'
import Aboutus from '../componets/Aboutus'
import Service from '../pages/Service'
import Shop from './Shop'
import BookAppoinment from './BookAppoinment'
import ContactUS from './ContactUS'
import Contact from '../componets/Contact'

function User() {
  return (
   <>
   <Hero/>
      <Aboutus/>
      <Service/>
      <Shop/>
      <Contact/>

   </>
  )
}

export default User
