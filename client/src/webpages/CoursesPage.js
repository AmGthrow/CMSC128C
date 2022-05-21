import React from 'react'
import CoursesTabsBar from '../components/CoursesTabsBar/CoursesTabsBar'

export default function CoursesPage() {
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
       <CoursesTabsBar/>
      </div>
    </div>
  )
}
