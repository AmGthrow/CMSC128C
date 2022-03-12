import React from 'react'
import Footer from '../components/Footer/Footer'
import SendEmailBanner from '../domain/SendEmailBanner/SendEmailBanner'

export default function Home() {
  return (
    <div className='main-container'>
      {/* navbar */}
      <h1>Home</h1>
      {/* banners */}
      
      <SendEmailBanner/>

      {/* footer */}
      <Footer/>
    </div>
  )
}
