import React from 'react'
import ClassCard from '../../components/ClassCard/ClassCard'
import CLCSS from './ClassList.module.css'


const classesData = [{
    title: 'Code Meets World',
    description: "Lorem ipsum dolor sit amet,.Donec laoreet tincidunt sollicitudin porttitor. Proin sagittis turpis semper purus. Phasellus ut consectetur mauris neque. Donec vel ligula eu erat.",
    days: 'Days',
    timeRange: 'XX:XX-XX:XX'
},
{
    title: 'Code Meets Science',
    description: "Lorem ipsum dolor sit amet,.Donec laoreet tincidunt sollicitudin porttitor. Proin sagittis turpis semper purus. Phasellus ut consectetur mauris neque. Donec vel ligula eu erat.",
    days: 'Days',
    timeRange: 'XX:XX-XX:XX'
},
{
    title: 'Code Meets Kids',
    description: "Lorem ipsum dolor sit amet,.Donec laoreet tincidunt sollicitudin porttitor. Proin sagittis turpis semper purus. Phasellus ut consectetur mauris neque. Donec vel ligula eu erat.",
    days: 'Days',
    timeRange: 'XX:XX-XX:XX'
},
{
    title: 'Python',
    description: "Lorem ipsum dolor sit amet,.Donec laoreet tincidunt sollicitudin porttitor. Proin sagittis turpis semper purus. Phasellus ut consectetur mauris neque. Donec vel ligula eu erat.",
    days: 'Days',
    timeRange: 'XX:XX-XX:XX'
}]

export default function ClassList() {

    const classes = classesData.map((classData) =>
        <ClassCard
            key={classData.title}
            classData={classData}
        />
    )

    return (
        <div className={CLCSS.container}>
            <h1>Class List</h1>
            <p>Active Classes: X</p>
            {classes}
        </div>
  )
}