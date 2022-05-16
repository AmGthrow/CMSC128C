import React from 'react'
import EmailInputField from '../domain/EmailInputField/EmailInputField'

export default function EnrollNowPage() {

  const container = {
    backgroundColor: "#FFCA84",
    height: '82vh'
  }

  const content = {
    paddingTop: '5em'
  }
  return (
    <div style={container}>
      <div  style={content}>
        <EmailInputField/>
      </div>
    </div>
  )
}