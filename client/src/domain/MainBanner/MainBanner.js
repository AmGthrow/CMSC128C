import React from 'react'
import MBCSS from './MainBanner.module.css'
import logo_textless from '../../assets/logo_textless.png'

function Logo () {
  return <img className={MBCSS.logo} src={logo_textless} alt="Codercademy logo"></img>
}

function Greetings () {
  return (
    <>
      <p className={MBCSS.intro}>We are <b>Codercademy</b></p>
      <p className={MBCSS.description}>cultivating learning since 2020</p>
    </>
  )
}

export default function MainBanner() {
    return (
      <div className={MBCSS.container}>
          <div className={MBCSS.content}>
            <Logo/>
            <Greetings/>
          </div>
      </div>
    )
}