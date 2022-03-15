import React from 'react'
import HeroShot from '../domain/HeroShot/HeroShot'
import SendEmailBanner from '../domain/SendEmailBanner/SendEmailBanner'
import Footer from '../components/Footer/Footer'
import NavBar from '../components/NavBar/NavBar'
import MainFeatures from '../domain/MainFeatures/MainFeatures'

export default function LandingPage() {
  return (
    <div>
      {/* navbar */}
      <NavBar/>

      {/* banners */}
      <HeroShot/>
      <MainFeatures/>
      <SendEmailBanner/>
      
      {/* footer */}
      <Footer />
    </div>
  )
}
