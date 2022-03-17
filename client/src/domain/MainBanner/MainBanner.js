import React from 'react'
import './MainBanner.css'
import logo_textless from '../../assets/logo_textless.png'

export default function HeroShot() {
    return (
      <div className='hero-shot-container'>
          <div className="content">
            <img src={logo_textless} id="hero__logo" alt="Codercademy logo"></img>
            <h1>We are <b>Codercademy</b></h1>
            <h3>cultivating learning since 2020</h3>
          </div>
      </div>
    )
  }