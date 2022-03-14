import React, { useState } from 'react'
import './EmailInputField.css'
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
    <div className='input-field-container'>
      <form onSubmit={handleSubmit}>
          <input 
            value={emailAddress}
            type='email'
            onChange={handleChange}
            placeholder='jdelacruz@gmail.com'/>
          <button type='submit'>
            <p className='button-text'>Send</p>
          </button>
      </form>
    </div>
  )
}
