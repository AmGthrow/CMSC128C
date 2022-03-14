import React from 'react'
import HeroShot from '../domain/HeroShot/HeroShot'
import SendEmailBanner from '../domain/SendEmailBanner/SendEmailBanner'
import Footer from '../components/Footer/Footer'

export default function LandingPage() {
  return (
    <div>
      {/* navbar */}
      <h1>Home</h1>

      {/* banners */}
      <HeroShot/>

       <SendEmailBanner/>

       <Footer />
    </div>
  )
}
