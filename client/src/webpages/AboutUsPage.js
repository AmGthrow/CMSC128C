import React from 'react'
import MainFeatures from '../domain/MainFeatures/MainFeatures'
import Overview from '../domain/Overview/Overview'
import MeetTheTeam from '../domain/MeetTheTeam/MeetTheTeam'
import ReviewVideo from '../domain/ReviewVideo/ReviewVideo'
import EmailInputField from '../domain/EmailInputField/EmailInputField'


export default function AboutUsPage() {
  return (
    /* <div style={{backgroundColor: '#FFCA84', paddingTop: '5em'}}> */
    <div>
      <div style={{backgroundColor: '#FFCA84', paddingTop: '6em'}}>
        <Overview/>
      </div>
      <div style={{paddingTop: '7.5em'}}>
        <MainFeatures/>
      </div>
      <MeetTheTeam />
      <ReviewVideo />
      <EmailInputField /> 
      
    </div>
  )
}
