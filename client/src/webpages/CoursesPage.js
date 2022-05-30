import React from 'react'
import CoursesTabsData from '../components/CoursesTabsData/CoursesTabsData'
import EmailInputField from '../domain/EmailInputField/EmailInputField'

export default function CoursesPage() {
  return (
    <div style={{backgroundColor: '#FFCA84', paddingTop: '6.5em'}}>
      <CoursesTabsData/>
      <EmailInputField/>
    </div>
  )
}
