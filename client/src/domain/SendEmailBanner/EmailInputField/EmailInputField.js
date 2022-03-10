import React from 'react'
import './EmailInputField.css'

export default function EmailInputField() {
  return (
    <div className='input-field-container'>
        <form>
            <input placeholder='jdelacruz@gmail.com' />
            <button>
                <p className='button-text'>Send</p>
            </button>
        </form>
    </div>
  )
}
