import React from 'react'
import ClassList from '../domain/ClassList/ClassList'
import Footer from '../components/Footer/Footer'
import NavBar from '../components/NavBar/NavBar'

export default function ClassListPage() {
  return (
    <>
      <NavBar/>
      <ClassList/>
      <Footer />
    </>
  )
}
