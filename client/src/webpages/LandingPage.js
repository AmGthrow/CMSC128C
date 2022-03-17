import React from 'react'
import MainBanner from '../domain/MainBanner/MainBanner'
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
      <MainBanner/>

      <MainFeatures/>

       <SendEmailBanner/>

       <Footer />
    </div>
  )
}
