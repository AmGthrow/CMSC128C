import React from 'react'
import CCSS from './Courses.module.css'
import ClassCard from '../../components/ClassCard/ClassCard'
import CoursesLogic from './CoursesLogic'
import {GrFormPrevious, GrFormNext} from 'react-icons/gr'


export default function Courses({width}) {

  const { fetchPrev, fetchNext, courses} = CoursesLogic({width})

  return (
    <>
      <Heading/>
      <div className={CCSS.content}>
        {width > 1260 ? 
        <CoursesList data={courses} /> : 
        <> 
          <button onClick={fetchPrev}> <GrFormPrevious/> </button>
          <CoursesList data={courses} />
          <button onClick={fetchNext}> <GrFormNext/> </button> 
        </>}
       </div>
    </>
  )
}

function Heading() {
  return (
  <div className={CCSS.headingcontainer}>
      <h1 className={CCSS.heading}>Courses Offered</h1>
      <p className={CCSS.paragraph}>Our globally-competent courses are based on the highly successful Saturday Kids curricula, Singapore’s First Online Coding School. <br/>Take a look at the different coding adventures that await in each of our courses.</p>
  </div>
  )
}

function CoursesList ({data}) {
  const d = data.map((da) => <ClassCard key={da.title} classData={da} />)
  return <div className={CCSS.list}> {d} </div>
}