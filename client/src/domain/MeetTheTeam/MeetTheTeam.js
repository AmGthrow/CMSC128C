import React from 'react'
import MTT from './MeetTheTeam.module.css'
import kids from '../../assets/kids2.jpg'

function MeetTheTeam() {
  return (
    <div className={MTT.container}>
      <div className={MTT.text}>
        <h2>Meet the Team</h2>
        <p>Once upon a pandemic day in 2020, a group of top-notch teachers from different schools and disciplines came together to bring Singapore's first coding school for kids to our shores. We are Codercademy - the pilot teachers of Doyobi (the online spin-off of www.saturdaykids.com) in the Philippines.</p>
      </div>
      <img src={kids} alt='team'/>
      
    </div>
  )
}

export default MeetTheTeam