import React from 'react'
import CCSS from './MainCourses.module.css'
import ClassCard from '../../components/ClassCard/ClassCard'
import MainCoursesLogic from './MainCoursesLogic'
import {GrFormPrevious, GrFormNext} from 'react-icons/gr'

function Heading() {
    return (
    <div className={CCSS.headingcontainer}>
        <h1 className={CCSS.heading}>Courses Offered</h1>
        <p className={CCSS.paragraph}>
        Our globally-competent courses are based on the highly successful Saturday Kids curricula, Singapore’s First Online Coding School.
        <br/>Take a look at the different coding adventures that await in each of our courses.</p>
    </div>
    )
}

function CoursesList ({data}) {

  const d = data.map((da) => <ClassCard key={da.title} classData={da} />)

  return <div className={CCSS.list}> {d} </div>
}

export default function MainCourses({width}) {

  const { fetchPrev, fetchNext, courses} = MainCoursesLogic({width})

  const displayCourses = width > 920 ? <CoursesList data={courses} /> : null

  return (
    <>
        <Heading/>
        <div className={CCSS.content}>
          {displayCourses}
        </div>
    </>
  )
}

