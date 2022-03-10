import React from 'react'
import Footer from '../components/Footer/Footer'
import EnrollNowBanner from '../domain/EnrollNowBanner/EnrollNowBanner'

export default function Home() {
  return (
    <div className='main-container'>
      <h1> Home</h1>
      <EnrollNowBanner />
      <Footer/>
    </div>
  )
}
