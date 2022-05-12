import React from 'react'
import EmailInputField from './EmailInputField/EmailInputField'
import SECSS from './SendEmailBanner.module.css'

export default function EnrollNowBanner() {
  return (
    <div className={SECSS.container}>
        <div className={SECSS.content}>
            <div className={SECSS.email_input_container}>
                    <p className={SECSS.msg_1}>Enroll Now!</p>
                    <p className={SECSS.msg_2}>Leave us your email, and we'll contact you!</p>
                    <EmailInputField />
            </div>
        </div>
    </div>
  )
}
