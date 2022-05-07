import React from 'react'
import MBCSS from './MainBanner.module.css'

function Greetings() {
  return (
    <>
      <p className={MBCSS.intro}>CULTIVATING<br/>CURIOUS MINDS</p>
      <p className={MBCSS.since}>SINCE 20XX</p>
      <p className={MBCSS.description}>Learning through creation and play. Doyobi’s guided courses integrate videos, quizzes and projects to "play better not study harder."<br/><br/>Courses based on the highly successful https://www.saturdaykids.com/ curricula.</p>
    </>
  )
}

export default function MainBanner() {
  return (
    <div className={MBCSS.container}>
      <Greetings />
    </div>
  )
}