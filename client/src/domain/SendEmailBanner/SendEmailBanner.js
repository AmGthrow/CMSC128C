import React from 'react'
import EmailInputField from './EmailInputField/EmailInputField'
import './SendEmailBanner.css'

function IndexFingerPoint () {
    return (
        <div className='index-finger-container'>
            <img 
            src={require('../../assets/index-finger-point.png')} 
            alt='index finger point'/>
        </div>
    )
}

export default function EnrollNowBanner() {
  return (
    <div className='enroll-now-container'>
        <div className='en-content'>
            <div className='email-input-container'>
                    <p className='message-1'>Enroll Now!</p>
                    <p className='message-2'>Leave us your email, and we'll contact you!</p>
                    <EmailInputField />
            </div>
            <IndexFingerPoint />
        </div>
    </div>
  )
}
