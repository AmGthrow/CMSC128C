import React from 'react'
import CCSS from './Courses.module.css'
import ClassCard from '../../components/ClassCard/ClassCard'

const classesData = [{
  title: 'Code Meets World',
  description: "Lorem ipsum dolor sit amet,.Donec laoreet tincidunt sollicitudin porttitor. Proin sagittis turpis semper purus. Phasellus ut consectetur mauris neque. Donec vel ligula eu erat.",
},{
  title: 'Code Meets World',
  description: "Lorem ipsum dolor sit amet,.Donec laoreet tincidunt sollicitudin porttitor. Proin sagittis turpis semper purus. Phasellus ut consectetur mauris neque. Donec vel ligula eu erat.",
},{
  title: 'Code Meets World',
  description: "Lorem ipsum dolor sit amet,.Donec laoreet tincidunt sollicitudin porttitor. Proin sagittis turpis semper purus. Phasellus ut consectetur mauris neque. Donec vel ligula eu erat.",
}]

function Heading() {
    return (
    <div className={CCSS.headingcontainer}>
        <h1 className={CCSS.heading}>Courses Offered</h1>
        <p className={CCSS.paragraph}>Our globally-competent courses are based on the highly successful 'https://www.saturdaykids.com/ curricula.<br/>Take a look at the different coding adventures that await in each of our courses.</p>
    </div>
    )
}

function Courses() {
  const classes = classesData.map((classData) =>
  <ClassCard
      key={classData.title}
      classData={classData}
  />
)
  
  return (
    <>
        <Heading/>
        <div className={CCSS.list}>
          {classes}
        </div>
    </>
  )
}

export default Courses