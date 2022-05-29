import React from 'react'
import OCSS from './Overview.module.css'
import kid from '../../assets/kid-headphones.png'

function Introduction() {
  return (
    <div className={OCSS.introduction}>
        <header className={OCSS.head1}>WE ARE CODERCADEMY</header>
        <p className={OCSS.p1}>Once upon a pandemic day in 2020, a group of top-notch teachers from different schools and disciplines came together to bring Singapore's first coding school for kids to our shores. We are Codercademy - the pilot teachers of Doyobi (the online spin-off of www.saturdaykids.com) in the Philippines.</p>
    </div>
  )
}

function VisionMission() {
    return (
    <div className={OCSS.section}>
        <img className={OCSS.kidheadphones} src={kid} alt="kid with headphones"></img>    
        <div className={OCSS.visionmission}>
            <div className={OCSS.vmcontainer}>
                <header className={OCSS.head2}>VISION</header>
                <p className={OCSS.p2}>Once upon a pandemic day in 2020, a group of top-notch teachers from different schools and disciplines came together to bring Singapore's first coding school for kids to our shores.</p>
            </div>
            <div className={OCSS.vmcontainer}>
                <header className={OCSS.head2}>MISSION</header>
                <p className={OCSS.p2}>Once upon a pandemic day in 2020, a group of top-notch teachers from different schools and disciplines came together to bring Singapore's first coding school for kids to our shores.</p>
            </div>
        </div>
    </div>
    )
  }

export default function Overview({width}) {
  return <div> 
        <Introduction/>
        <VisionMission/>
   </div>
}