import React from 'react'
import EmailInputField from './EmailInputField/EmailInputField'
import SECSS from './SendEmailBanner.module.css'

function IndexFingerPoint () {
    return (
        <div className={SECSS.finger_container}>
            <img 
            className={SECSS.finger}
            src={require('../../assets/index-finger-point.png')} 
            alt='index finger point'/>
        </div>
    )
}

export default function EnrollNowBanner() {
  return (
    <div className={SECSS.container}>
        <div className={SECSS.content}>
            <div className={SECSS.email_input_container}>
                    <p className={SECSS.msg_1}>Enroll Now!</p>
                    <p className={SECSS.msg_2}>Leave us your email, and we'll contact you!</p>
                    <EmailInputField />
            </div>
            <IndexFingerPoint />
        </div>
    </div>
  )
}
