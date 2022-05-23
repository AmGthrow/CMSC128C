import React from 'react'
import python from '../assets/python.png'
import world from '../assets/world.png'
import science from '../assets/science.png'
import CoursesTabsData from '../components/CoursesTabsData/CoursesTabsData'


export default function CoursesPage() {

  const courses = [
    {icon: python, val:'Python in the Real World'}, 
    {icon: world, val:'Code Meets World' },
    {icon: science, val:'Coding With Science' }
  ]

  return (
    <div style={{backgroundColor: '#FFCA84', paddingTop: '6.5em'}}>
      <CoursesTabsData courses={courses}/>
    </div>
  )
}
