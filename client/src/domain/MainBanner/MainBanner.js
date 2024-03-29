import React from 'react'
import MBCSS from './MainBanner.module.css'

function Greetings() {
  return (
    <> 
      <p className={MBCSS.name}>CODERCADEMY:</p>
      <p className={MBCSS.intro}>CULTIVATING<br/>CURIOUS MINDS</p>
      <p className={MBCSS.since}>SINCE 2021</p>
      <p className={MBCSS.description}>
      Learning through creation and play, Codercademy is the first and only Doyobi science & coding school in the Philippines with courses based on the highly successful Saturday Kids curricula, Singapore’s First Online Coding School.</p>
    </>
  ) 
}

export default function MainBanner({width}) {

  return <div className={MBCSS.container}> <Greetings /> </div>
}