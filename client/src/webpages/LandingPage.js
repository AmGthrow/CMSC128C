import React from 'react'
import MainBanner from '../domain/MainBanner/MainBanner'
import MainFeatures from '../domain/MainFeatures/MainFeatures'
import NavBar from '../components/NavBar/NavBar'
import { Box } from '@chakra-ui/react'
import EmailInputField from '../domain/SendEmailBanner/EmailInputField/EmailInputField'

export default function LandingPage() {
  return (
    <div>

      {/* navbar */}
      <NavBar/>

      {/* banners */}
      <MainBanner/>

      <MainFeatures/>
      
      <EmailInputField/>


    </div>
  )
}
