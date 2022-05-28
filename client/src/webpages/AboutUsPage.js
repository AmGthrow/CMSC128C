import React from 'react'
import MainFeatures from '../domain/MainFeatures/MainFeatures'
import Overview from '../domain/Overview/Overview'

export default function AboutUsPage() {
  return (
    /* <div style={{backgroundColor: '#FFCA84', paddingTop: '5em'}}> */
    <div>
      <div style={{backgroundColor: '#FFCA84', paddingTop: '5em'}}>
        <Overview/>
      </div>
      <div style={{paddingTop: '5em'}}>
        <MainFeatures/>
      </div>
    </div>
  )
}
