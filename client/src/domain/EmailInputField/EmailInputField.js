import React, { useState } from 'react'
import child from '../../assets/children-email.png'
import EFCSS from './EmailInputField.module.css'
import {saveEmailAddress} from '../../api/FetchLogic/saveEmailAddress'

export default function EmailInputField() {
  const [emailAddress, setEmailAddress] = useState ('')

  const handleChange = e => {
    setEmailAddress(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    const email = {'email': emailAddress}
    handleSubmitEmail(email)
    setEmailAddress('')
  }

  const handleSubmitEmail = async (email) =>  {
    const {error} = await saveEmailAddress(email)
    if(error) return console.log(error)
  }


  return (
  <div className={EFCSS.container}> 
    <div className={EFCSS.email_page_container}>
      <h1>Jump right into coding<br/> with Coderacademy!</h1>
      <p>To enroll, leave us your email,<br/> and we'll contact you.</p>
      <form className={EFCSS.form} onSubmit={handleSubmit}>
          <input 
            className={EFCSS.input}
            value={emailAddress}
            type='email'
            onChange={handleChange}
            placeholder='jdelacruz@gmail.com'/>
          <button 
            className={EFCSS.btn}
            type='submit'>
            Send
          </button>
      </form> 
    </div>
    <img className={EFCSS.pic} src={child} alt='kids' />
  </div>
  )
}

