import React, { useState } from 'react'
import EFCSS from './EmailInputField.module.css'
import {saveEmailAddress} from '../../../api/FetchLogic/saveEmailAddress'

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
  )
}
