import './landingPage.css';
import logo_textless from "./logo_textless.png";
import React from 'react'
import Footer from '../components/Footer/Footer'
import SendEmailBanner from '../domain/SendEmailBanner/SendEmailBanner'

export default function Home() {
  return (
    <div className='main-container'>
      {/* navbar */}
      <h1>Home</h1>
      {/* banners */}
       <HeroShot></HeroShot>
      <SendEmailBanner/>

      {/* footer */}
      <Footer/>
    </div>
  )
}

function HeroShot() {
  return (
    <div id="hero-shot">
      <img src={logo_textless} id="hero__logo" alt="Codercademy logo"></img>
      <h1>We are <b>Codercademy</b></h1>
      <h3>cultivating learning since 2020</h3>
    </div>
  )
}